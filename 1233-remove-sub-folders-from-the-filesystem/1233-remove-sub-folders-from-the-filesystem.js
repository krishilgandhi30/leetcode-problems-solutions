/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    // Sort the folders to ensure parents come before their subfolders
    folder.sort();

    const result = [];

    for (const f of folder) {
        // Check if the current folder is a subfolder of the last added folder
        if (result.length === 0 || !f.startsWith(result[result.length - 1] + '/')) {
            result.push(f); // Add to result if it's not a subfolder
        }
    }

    return result;
};