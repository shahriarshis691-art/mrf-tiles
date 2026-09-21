package com.mrfgalaxytiles.app;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;
import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

public class MainActivity extends BridgeActivity {
    @Override
    protected void load() {
        super.load();
        bridge.setWebViewClient(new BridgeWebViewClient(bridge) {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                String path = url.getPath();
                if (!request.isForMainFrame() || !"localhost".equals(url.getHost()) ||
                    path == null || path.equals("/") || path.substring(path.lastIndexOf('/') + 1).contains(".")) {
                    return super.shouldInterceptRequest(view, request);
                }
                String assetPath = path.endsWith("/") ? path + "index.html" : path + "/index.html";
                boolean missing = false;
                try (InputStream ignored = getAssets().open("public" + assetPath)) {
                    // Confirm the exported route exists before passing it to Capacitor.
                } catch (IOException ex) {
                    assetPath = "/404.html";
                    missing = true;
                }
                final Uri exportedUrl = url.buildUpon().path(assetPath).build();
                WebResourceRequest exportedRequest = new WebResourceRequest() {
                    public Uri getUrl() { return exportedUrl; }
                    public boolean isForMainFrame() { return request.isForMainFrame(); }
                    public boolean isRedirect() { return request.isRedirect(); }
                    public boolean hasGesture() { return request.hasGesture(); }
                    public String getMethod() { return request.getMethod(); }
                    public Map<String, String> getRequestHeaders() { return request.getRequestHeaders(); }
                };
                // Preserve Capacitor's bridge injection and Next.js's visible route URL.
                WebResourceResponse response = super.shouldInterceptRequest(view, exportedRequest);
                if (missing && response != null) response.setStatusCodeAndReasonPhrase(404, "Not Found");
                return response;
            }
        });
    }
}
