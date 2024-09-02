window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(function() {
        loader.classList.add('hidden');
        content.style.display = 'block';
        document.body.style.overflow = 'auto'; // Allow scrolling
    }, 2000); // Simulates loading time
});

function showVersions() {
    document.getElementById("versions").classList.toggle("hidden");
}

function showVersionDetails(version) {
    const versionDetails = document.getElementById("version-details");
    versionDetails.classList.remove("hidden");

    if (version === 'v1.0') {
        versionDetails.innerHTML = `
            <h4>v1.0</h4>
            <p>Written in Python. Here is the documentation:</p>
            <ul>
                <li>1. Basic Syntax
                    <ul>
                        <li>1.1 Printing to Console</li>
                        <li>1.2 Variables and Data Types</li>
                        <li>1.3 Arithmetic Operations</li>
                        <li>1.4 Comments</li>
                    </ul>
                </li>
                <li>2. Control Flow</li>
                <li>3. Functions</li>
                <li>4. Data Structures</li>
                <li>5. Advanced Topics</li>
                <li>6. License and others:</li>
            </ul>
        `;
    } else if (version === 'v1.1') {
        versionDetails.innerHTML = `
            <h4>v1.1</h4>
            <p>This version is under development. Since Python is already a high-level language, working with it is slow and inefficient, so we are developing v1.1 with C++.</p>
            <p><strong>Coming soooo00n!</strong></p>
        `;
    }
}
