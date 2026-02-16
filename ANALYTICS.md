# Vercel Web Analytics Integration

This project uses Vercel Web Analytics to track visitor pageviews and interactions.

## Setup

Web Analytics has been integrated into this project following Vercel's best practices for React applications.

### 1. Package Installation

The `@vercel/analytics` package is installed as a dependency:

```json
"@vercel/analytics": "^1.6.1"
```

### 2. Implementation

The Analytics component is imported and added to the main App component in `src/App.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          {/* ... app content ... */}
          <BrowserRouter>
            {/* ... routes ... */}
            <Analytics />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
```

### 3. How It Works

The `<Analytics />` component:
- Automatically injects the Vercel Analytics tracking script
- Tracks pageviews and route changes
- Sends analytics data to `/_vercel/insights/view` endpoint
- Only activates in production when deployed to Vercel
- Has no impact in local development

### 4. Deployment

When the app is deployed to Vercel:
1. Enable Web Analytics in the Vercel dashboard (Project > Analytics > Enable)
2. The Analytics component will automatically start tracking
3. View analytics data in the Vercel dashboard under the Analytics tab

### 5. Configuration Options (Optional)

The Analytics component accepts optional configuration:

```tsx
<Analytics 
  mode="production"  // Override environment detection
  debug={false}      // Enable/disable console logging
  beforeSend={(event) => event}  // Modify events before sending
/>
```

For this project, we use the default configuration which works automatically.

## Privacy

Vercel Web Analytics:
- Does not use cookies
- Does not track personal information
- Is GDPR and CCPA compliant
- Collects only aggregated pageview data

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)
- [Analytics Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)
