# Google Sheets CMS Setup Guide

This guide explains how to set up, publish, and connect a Google Sheet to power the **Latest Announcements Spotlight** on the homepage.

---

## 1. Create your Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. In the first row (Row 1), add the following column headers exactly:
   *   `title` - The main heading of the announcement (e.g. *Boardroom Billionaires*)
   *   `tag` - Small highlight tag (e.g. *Flagship Event*, *Milestone*, *Workshop*)
   *   `subtext` - The description paragraph summarizing the event.
   *   `image` - The photo URL or path (see Section 2 below).
   *   `date` - The date string (e.g. *28th August 2026*).
   *   `time` - The time (e.g. *10:00 AM* or use `-` if not applicable).
   *   `venue` - The location (e.g. *ACE Auditorium* or use `-` if not applicable).
   *   `btnText` - Text for the call-to-action button (e.g. *Register Now*).
   *   `btnUrl` - Link for the button (external form URL or internal page route like `/initiatives`).

3. Add your announcements in the rows below the headers. 
   *   *Note*: The website automatically reverses the list and displays the **top 3 latest rows** (meaning the row you add at the very bottom of the Google Sheet will show up first).

---

## 2. Formatting Images
You can load images in two ways:
*   **Option A (Local Paths)**: Put your image inside the project's `/public/assets/announcements/` folder (e.g. `/public/assets/announcements/boardroom.png`) and type the relative path in the spreadsheet cell:
    `/assets/announcements/boardroom.png`
*   **Option B (Cloud URLs)**: Upload your image to any cloud host (like Imgur, Postimages, or Discord/GitHub link) and paste the direct URL in the spreadsheet cell:
    `https://images.unsplash.com/photo-1540575467063-178a50c2df87...`

---

## 3. Publish to the Web
1. Inside your Google Sheet, click **File** -> **Share** -> **Publish to Web**.
2. Select your sheet page (typically `Sheet1`) from the first dropdown.
3. Change the second dropdown from **Web Page** to **Comma-separated values (.csv)**.
4. Click **Publish** and copy the link.

---

## 4. Link the Sheet to the Website

### Local Development:
1. In the root directory of your project, create a file named `.env`.
2. Add the environment variable line, replacing the URL with your copied link:
   ```env
   VITE_ANNOUNCEMENTS_SHEET_URL=https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv
   ```
3. Restart your development server (`npm run dev`) to load the environment variables.

### Production (Netlify / Vercel):
1. Go to your site dashboard on Netlify.
2. Navigate to **Site Configuration** -> **Environment Variables**.
3. Add a new variable:
   *   **Key**: `VITE_ANNOUNCEMENTS_SHEET_URL`
   *   **Value**: `https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv`
4. Trigger a new deploy for the settings to take effect.
