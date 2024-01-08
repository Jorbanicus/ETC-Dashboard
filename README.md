This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Description
This application reads multiple self-updating timestamp txt. file and reflects it on an interface. 

![Working Example](./arun/images/Capture.png)
![Loading Example](./arun/images/Capture2.png)
![Failed Example](./arun/images/Capture3.png)

# Getting Started
First, edit the file location in src/components/WatchDetails.js to the file location of your txt. files.

Secondly, double click the .bat file to run the application.

Lastly, open [http://localhost:3000] with your browser to see the result if it has not been opened.

# File Directory Structure
/app
|   layout.js (Layout of Page)
|   page.js (Landing Page)
|
+---src
|   +---API
|   |       readFile.js 
|   |
|   \---components
|       |   Watch.js (Main component that fetches and displays data)
|       |   WatchDetails.js (Edit txt file location here)
|       |
|       \---parts
|               FailIcon.js
|               LiveIcon.js
|               TextDisplay.js (Handles the display of text content)
|
\---styles
        globals.css

# Logic - Watch.js 
TLDR: 
In the `Watch.js` component, the `useEffect` hook periodically fetches data from a txt. file every 5 seconds. The `LiveIcon` and `FailIcon` components are used to visually represent the state of the fetched data. If the data is up-to-date in the txt. file (updated within the last 7 minutes), `LiveIcon` is displayed. If the data is outdated (not updated within the last minute) or an error occurs, `FailIcon` is displayed.

## LiveIcon and FailIcon
The LiveIcon and FailIcon are custom components that display different icons based on the state of the data fetching operation.

- If `isLoading` is `true`, the `FailIcon` is displayed. This happens when a fetch operation is in progress or when the last fetched value hasn't been updated for more than 7 minutes.

- If `isLoading` is `false` and `lastValue` exists (i.e., it's not `null`, `undefined`, or an empty string), the code checks how much time has passed since the last update:
    - If less than or equal to 7 minutes (420 000 milliseconds) have passed since the last update, the `LiveIcon` is displayed. This indicates that the data is up-to-date.
    - If more than 7 minutes have passed since the last update, the `FailIcon` is displayed. This indicates that the data is outdated.

- If `isLoading` is `false` and `lastValue` doesn't exist, the `FailIcon` is displayed. This could indicate that there was an error fetching the data or that the data is not available.

## useEffect Hook
The `useEffect` hook in this code is used to periodically fetch the last line of a file from a server and update the component's state based on the fetched data. Here's a step-by-step explanation:

- When the component mounts or the `lastValue`, `lastUpdateTime`, or `filePath` variables change, the `useEffect` hook is triggered.

- Inside the `useEffect`, an interval is set up to run every 5 seconds (5000 milliseconds).

- Each time the interval runs, it makes a fetch request to `http://localhost:3000/`, passing the `filePath` as a query parameter.

- If the fetch request is successful, it processes the response as text and then updates the component's state:
    - If the fetched data (`newValue`) is different from the current `lastValue`, it updates `lastValue` with `newValue`, sets `lastUpdateTime` to the current time, and sets `isLoading` to `false`.
    - If the fetched data is the same as the current `lastValue` and more than 7 minutes have passed since the last update, it sets `isLoading` to `true`.

- If the fetch request fails, it logs the error and sets `isLoading` to `false`.

- When the component unmounts or before the next time the `useEffect` runs, it clears the interval to prevent memory leaks.

# Creator
This project was created by Jorbanicus.

# License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)."# arun" 
