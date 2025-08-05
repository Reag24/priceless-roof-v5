# Vercel Deployment Guide for Priceless Home Improvements Landing Page

## Introduction

This comprehensive guide will walk you through the process of deploying your React-based landing page to Vercel, configuring your custom domain (pricelessnc.com), and ensuring all functionalities, including your lead capture form, work seamlessly. Vercel is an excellent platform for deploying front-end applications, offering automatic deployments from Git repositories, global CDN for fast performance, and easy custom domain management.

This guide assumes you have already pushed your landing page code to a GitHub repository.




## 1. Setting Up Your Project on Vercel

### 1.1. Create a Vercel Account

If you don't already have one, sign up for a free Vercel account. You can do this easily by connecting your GitHub account, which simplifies the deployment process significantly [1].

### 1.2. Import Your Git Repository

Once logged in, navigate to your Vercel dashboard. Click on the 'Add New...' button (or 'New Project' if it's your first project) and then select 'Project'. Vercel will prompt you to import a Git repository. Choose your GitHub account and select the repository where your `priceless-roofing-landing` code is hosted.

### 1.3. Configure Project Settings

After selecting your repository, Vercel will automatically detect that it's a React project (due to the `package.json` file). You will see a screen to configure your project settings. For most React applications created with `create-react-app` or Vite (which was used to build your landing page), the default settings are usually sufficient. However, it's good to verify the following:

*   **Framework Preset:** Ensure this is set to `Create React App` or `Vite` (Vercel often auto-detects this correctly).
*   **Root Directory:** If your project is not in the root of your repository (e.g., it's in a subdirectory), you might need to specify the correct path here. In your case, it should be the root of the repository.
*   **Build Command:** Vercel typically auto-detects `npm run build` or `yarn build`. This command generates the optimized static files for your application.
*   **Output Directory:** This is where the built files are located after the build command runs. For Vite, this is usually `dist`.

Click 'Deploy'. Vercel will then pull your code, run the build command, and deploy your application. You will be provided with a unique Vercel URL (e.g., `your-project-name.vercel.app`) where your landing page is live.

> **Note:** Vercel automatically sets up continuous deployment. This means that every time you push new changes to the connected Git branch (usually `main` or `master`), Vercel will automatically rebuild and redeploy your application, ensuring your live site is always up-to-date.

---

**References:**
[1] Vercel Documentation: Getting Started. Available at: `https://vercel.com/docs/getting-started`




## 2. Configuring Your Custom Domain (pricelessnc.com)

Once your project is deployed on Vercel, the next crucial step is to connect your custom domain, `pricelessnc.com`. This will make your landing page accessible via your professional domain name.

### 2.1. Adding Your Domain to Vercel

1.  **Navigate to Project Settings:** From your Vercel dashboard, select your deployed project. Go to the `Settings` tab, and then click on `Domains` in the sidebar.
2.  **Add Your Domain:** In the `Domains` section, enter `pricelessnc.com` into the input field and click `Add`. Vercel will then present you with options to configure your domain.

### 2.2. Choosing a Domain Registrar

You asked whether you should get the domain through Vercel. Vercel does offer domain registration services, which can simplify the setup process as it automatically configures the necessary DNS records. However, you are free to purchase your domain from any third-party domain registrar (e.g., GoDaddy, Namecheap, Google Domains). There isn't a significant advantage to buying directly through Vercel unless you prefer to consolidate your services.

**Recommendation:** If you already have a preferred domain registrar or plan to manage other domains there, it's perfectly fine to purchase `pricelessnc.com` from them. If you prefer a more integrated experience and don't have a strong preference, buying through Vercel can be convenient.

### 2.3. Configuring DNS Records

Regardless of where you purchase your domain, you will need to configure its DNS records to point to Vercel. Vercel will provide you with the specific DNS records you need to add. These typically involve:

*   **A Record:** Pointing your root domain (`pricelessnc.com`) to Vercel's IP address.
*   **CNAME Record:** Pointing your `www` subdomain (`www.pricelessnc.com`) to your Vercel project URL.

**Steps to Configure DNS (General):**

1.  **Log in to Your Domain Registrar:** Access the DNS management section of your domain registrar (where you bought `pricelessnc.com`). This section is often labeled `DNS Management`, `Advanced DNS`, `Zone File Editor`, or similar.
2.  **Add/Modify Records:**
    *   **For the A Record:** Create an `A` record for `@` (or your root domain) and set its value to the IP address provided by Vercel. Vercel usually provides a specific IP like `76.76.21.21` [2].
    *   **For the CNAME Record:** Create a `CNAME` record for `www` and set its value to `cname.vercel-dns.com` or your project's Vercel URL (e.g., `your-project-name.vercel.app`). Vercel will specify the exact value.
3.  **Save Changes:** Save the DNS record changes. It can take anywhere from a few minutes to 48 hours for DNS changes to propagate across the internet. Vercel will automatically detect when the domain is correctly configured.

> **Important:** Vercel automatically handles SSL certificates (HTTPS) for your custom domain, so you don't need to configure this separately. This ensures your site is secure and trustworthy.

---

**References:**
[2] Vercel Documentation: Adding a Domain. Available at: `https://vercel.com/docs/concepts/projects/domains/add-a-domain`




## 3. Handling Subdirectories (Contact, Thank You, Privacy Policy)

Your landing page application is built using React and `react-router-dom`, which is a client-side routing library. This means that the routing for `/contact`, `/thankyou`, and `/privacy` is handled directly by your React application in the user's browser, not by separate physical directories on the server.

### 3.1. How Vercel Handles Client-Side Routing

When you deploy a single-page application (SPA) like yours to Vercel, Vercel serves a single `index.html` file (from your `dist` folder) for all requests that don't match a specific static asset. Your React application then takes over and uses `react-router-dom` to render the correct component based on the URL path.

This setup means:

*   You **do not** need to create separate physical folders named `contact`, `thankyou`, or `privacy` in your project structure for deployment.
*   Vercel automatically configures its server to redirect all unmatched paths to your `index.html` file, allowing your client-side router to handle the routing.

### 3.2. Ensuring Subdirectory Functionality

Since your `App.jsx` already defines routes for `/contact`, `/thankyou`, and `/privacy` using `<Route>` components, these subdirectories will work automatically once your application is deployed to Vercel and your custom domain is configured. Vercel's default behavior for SPAs ensures that these routes are correctly served.

**No additional configuration is required on Vercel for these subdirectories to function.** The links within your application (e.g., `<Link to="/contact">`) will correctly navigate to these client-side routes.

---

**References:**
[3] Vercel Documentation: Deploying a React App. Available at: `https://vercel.com/docs/frameworks/react`




## 4. Ensuring All Buttons and Form Submission Work Correctly

All interactive elements on your landing page, including navigation buttons, the "Back to Top" button, and crucially, your lead capture form, are designed to function correctly once deployed.

### 4.1. Navigation and "Back to Top" Buttons

Your navigation links (Home, Contact Us) and the "Back to Top" button are implemented using React Router (`react-router-dom`) and JavaScript scroll functions, respectively. Since these are client-side operations, they will work as expected once your application is deployed and running in the user's browser. No special Vercel configuration is needed for these.

### 4.2. Lead Capture Form and Webhook Integration

The lead capture form on your landing page is configured to send data to a specific webhook URL: `https://cape-fear-automations.app.n8n.cloud/webhook/18ab4a15-454e-48eb-ada7-098d5ca273dd`.

This is a direct API call from your front-end application to an external service (n8n in this case). For this to work, two main conditions must be met:

1.  **CORS (Cross-Origin Resource Sharing):** Your n8n webhook needs to be configured to accept requests from your Vercel-deployed domain (e.g., `https://pricelessnc.com`). If your webhook is not configured to allow requests from your domain, the browser will block the submission due to security policies. You might need to adjust the CORS settings within your n8n workflow or server configuration to allow `https://pricelessnc.com` as an allowed origin.

    > **What is CORS?** CORS is a security feature implemented in web browsers that prevents a web page from making requests to a different domain than the one that served the web page. This is to prevent malicious scripts from making unauthorized requests. For your form to successfully send data to your n8n webhook, the n8n server must explicitly tell the browser that it's okay to accept requests from your Vercel domain.

2.  **Webhook Availability:** Ensure your n8n webhook is active and correctly configured to receive and process the incoming data (first name, phone number, roof age). You can test this by submitting the form on your deployed Vercel site after the domain is connected.

**No changes are required in your React code for the webhook URL, as it's already hardcoded in `App.jsx`.** The form submission logic will attempt to send data to this URL directly from the user's browser.

### 4.3. Testing Form Submission

After deploying to Vercel and configuring your custom domain:

1.  Navigate to `https://pricelessnc.com`.
2.  Fill out the form with test data.
3.  Submit the form.
4.  Verify that you are redirected to the `/thankyou` page.
5.  Check your n8n workflow or the destination of your webhook to confirm that the data was received successfully.

If the form submission fails, the most common issue is CORS. Check your n8n webhook's configuration to ensure it allows requests from your Vercel domain.

---

**References:**
[4] Mozilla Developer Network: Cross-Origin Resource Sharing (CORS). Available at: `https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS`
[5] n8n Documentation: Webhooks. Available at: `https://docs.n8n.io/integrations/builtin/webhook/`



