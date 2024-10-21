let injected = false;

/**
 * Function to inject required external scripts and styles into the HTML document.
 * 
 * This function injects the necessary scripts and stylesheets for date pickers, input masks,
 * Bootstrap, and custom Igloo Room components. It ensures that scripts and styles are injected 
 * only once by checking their presence in the document.
 */
function insertIrLibScript() {
    if (!injected) {
        // Array of script sources
        const scripts = [
            { id: 'jquery', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/jquery.min.js', type: 'text/javascript' },
            { id: 'moment', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/daterangepicker/moment.min.js', type: 'text/javascript' },
            { id: 'daterangepicker', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/daterangepicker/daterangepicker.js', type: 'text/javascript' },
            { id: 'inputmask', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/inputmask/jquery.inputmask.js', type: 'text/javascript' },
            { id: 'bootstrap', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/bootstrap.bundle.min.js', type: 'text/javascript' },
            { id: 'toastr', src: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/toastr/toastr.min.js', type: 'text/javascript' },
            { id: 'iglooroom', src: 'https://david1chowaifaty.github.io/igloo-calendar-main-web/be-dist/iglooroom/iglooroom.esm.js', type: 'module' } // Custom script
        ];

        // Array of CSS link sources
        const styles = [
            { id: 'daterangepicker-css', href: 'https://wb-cmp.igloorooms.com/backend/dist/collection/assets/scripts/daterangepicker/daterangepicker.css', rel: 'stylesheet' }
        ];

        // Function to load remaining scripts after jQuery is loaded
        const loadRemainingScripts = () => {
            scripts.slice(1).forEach(({ id, src, type }) => {
                if (!document.getElementById(id)) {
                    const script = document.createElement('script');
                    script.id = id;
                    script.src = src;
                    script.type = type;
                    document.head.appendChild(script);
                }
            });

            // Inject styles
            styles.forEach(({ id, href, rel }) => {
                if (!document.getElementById(id)) {
                    const link = document.createElement('link');
                    link.id = id;
                    link.href = href;
                    link.rel = rel;
                    document.head.appendChild(link);
                }
            });

            console.log("All scripts and styles have been injected.");
        };

        // Inject jQuery first and load the rest after it's fully loaded
        const jqueryScript = scripts[0];
        if (!document.getElementById(jqueryScript.id)) {
            const script = document.createElement('script');
            script.id = jqueryScript.id;
            script.src = jqueryScript.src;
            script.type = jqueryScript.type;
            script.onload = loadRemainingScripts; // Load remaining scripts after jQuery is loaded
            document.head.appendChild(script);
        } else {
            loadRemainingScripts(); // If jQuery is already loaded, load the remaining scripts
        }

        injected = true;
        console.log("jQuery is being injected.");
    }
}

insertIrLibScript();

/**
 * Asynchronous function to authenticate a user using their username and password.
 * 
 * This function sends a POST request to the authentication API and returns the result if successful.
 * 
 * @param {string} username - The username for authentication.
 * @param {string} password - The password for authentication.
 * @returns {Promise<*>} - The result of the authentication process (My_Result), or null if there is an error.
 */
const login = async (username, password) => {
    try {
        const res = await fetch('https://gateway.igloorooms.com/IR/Authenticate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        return data.My_Result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

/**
 * Asynchronous function to authenticate a user with additional "aname" field.
 * 
 * This function sends a POST request to the authentication API and returns the result if successful.
 * The user must provide `username`, `password`, and `aName` parameters for the request to proceed.
 * 
 * @param {string} username - The username for authentication.
 * @param {string} password - The password for authentication.
 * @param {string} aName - An additional field for authentication.
 * @returns {Promise<*>} - The result of the authentication process (My_Result), or null if there is an error.
 * @throws {Error} - Throws an error if any of the required fields are missing.
 */
const mpoLogin = async (username, password, aName) => {
    // Check if all required fields are
    try {
        const res = await fetch('https://gateway.igloorooms.com/IR/Authenticate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                username,
                password,
                aname: aName
            })
        });

        const data = await res.json();
        return data.My_Result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

/* Helper function to calculate a date range based on a starting date (can be a Date object or a string) and a maximum span of months.
* 
* This function accepts a `fromDate` (either a Date object or a string in YYYY-MM-DD format) and a maximum number of months to generate a date range.
* The function returns an object containing the calculated `_FROM_DATE` (the start date) and `_TO_DATE` 
* (the end date, calculated by adding the specified number of months).
* 
* @param {Date|string} fromDate - The starting date as a Date object or a string in YYYY-MM-DD format (e.g., "2024-10-01").
* @param {number} maxMonths - The maximum number of months to calculate the `toDate` (e.g., 3 for 3 months).
* 
* @returns {Object} An object containing:
*   - `_FROM_DATE`: The provided `fromDate` in YYYY-MM-DD format.
*   - `_TO_DATE`: The calculated date after adding the specified months, in YYYY-MM-DD format.
* 
* Example usage:
*   const { _FROM_DATE, _TO_DATE } = calculateDateRange("2024-10-01", 3);
*   console.log(_FROM_DATE);  // "2024-10-01"
*   console.log(_TO_DATE);    // "2025-01-01" (approximately 3 months later)
*/
function calculateDateRange(fromDate, maxMonths) {
    // If fromDate is a string, convert it to a Date object
    const startDate = typeof fromDate === 'string' ? new Date(fromDate) : fromDate;

    // Ensure the fromDate is a valid Date object
    if (isNaN(startDate)) {
        throw new Error("Invalid start date. Please provide a valid Date object or a string in YYYY-MM-DD format.");
    }

    // Set the _FROM_DATE to the provided fromDate
    const _FROM_DATE = startDate.toISOString().substring(0, 10);

    // Calculate the _TO_DATE by adding the specified number of months
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + maxMonths);
    const _TO_DATE = endDate.toISOString().substring(0, 10);

    return {
        _FROM_DATE,
        _TO_DATE
    };
}