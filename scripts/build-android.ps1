$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path $PSScriptRoot -Parent
Push-Location $projectRoot
try {
    $env:NEXT_PUBLIC_SITE_URL = 'https://mrf-galaxy.vercel.app'
    $env:CATALOG_SOURCE = 'static'
    foreach ($directory in @('.next', 'out')) {
        $target = [IO.Path]::GetFullPath((Join-Path $projectRoot $directory))
        if (!$target.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar)) {
            throw "Unsafe clean target: $target"
        }
        if (Test-Path -LiteralPath $target) { Remove-Item -LiteralPath $target -Recurse -Force }
    }
    npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw 'Static web build failed.' }
    if (!(Test-Path -LiteralPath 'out/index.html')) { throw 'Static index.html is missing.' }
    if (!(Test-Path -LiteralPath 'android/gradlew.bat')) {
        throw 'Android project is missing. Restore android/ from source control to retain native routing.'
    }
    npx.cmd cap sync android
    if ($LASTEXITCODE -ne 0) { throw 'Capacitor sync failed.' }
    $sdkRoot = $env:ANDROID_HOME
    if (!$sdkRoot) { $sdkRoot = $env:ANDROID_SDK_ROOT }
    if (!$sdkRoot -and (Test-Path -LiteralPath 'C:/AndroidSDK/platforms')) { $sdkRoot = 'C:/AndroidSDK' }
    if (!$sdkRoot -and (Test-Path -LiteralPath "$env:LOCALAPPDATA/Android/Sdk/platforms")) {
        $sdkRoot = "$env:LOCALAPPDATA/Android/Sdk"
    }
    if ($sdkRoot) {
        Set-Content -LiteralPath 'android/local.properties' -Value ('sdk.dir=' + $sdkRoot.Replace('\', '/'))
    } elseif (!(Test-Path -LiteralPath 'android/local.properties')) {
        throw 'Set ANDROID_HOME to the Android SDK directory.'
    }
    Push-Location android
    try {
        & .\gradlew.bat assembleDebug --console=plain
        if ($LASTEXITCODE -ne 0) { throw 'Android build failed. Check JAVA_HOME (JDK 21) and the SDK.' }
    } finally { Pop-Location }
    Copy-Item -LiteralPath 'android/app/build/outputs/apk/debug/app-debug.apk' -Destination 'MRF-Galaxy-Tiles.apk' -Force
    Get-Item -LiteralPath 'MRF-Galaxy-Tiles.apk' | Select-Object FullName, Length
} finally { Pop-Location }
