function parseNumberArray(text) {
    if (!text.trim()) return [];
    return text.split(",").map(s => Number(s.trim())).filter(n => !Number.isNaN(n));
}

function sumofDistinct(arr1, arr2) {
    const presentIn2 = new Set(arr2);
    const presentIn1 = new Set(arr1);
    const distinct = [];
    for (const x of presentIn1) if (!presentIn2.has(x)) distinct.push(x);
    for (const y of presentIn2) if (!presentIn1.has(y)) distinct.push(y)
    return { sum: distinct.reduce((a, b) => a + b, 0), distinct }
}

function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");

    }
    let acc = 0;
    for (let i = 0; i < v1.length; 1++) acc += v1[i] * v2[i];
    return acc;
}

function areOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("p1-run").addEventListener("click", () => {
        const set1 =
            parseNumberArray(document.getElementById("p1-set1").value);
        const set2 =
            parseNumberArray(document.getElementById("p1-set2").value);
        const { sum, distinct } = sumofDistinct(set1, set2);
        const out = document.getElementById("p1-out"); out.innerHTML =
            <strong>Distinct elements:</strong> [$ { distinct.join(",") }] < br />
                <strong>Sum:</strong> ${ sum } `;
    });



document.getElementById("p2-run").addEventListener("click", () => {
    const v1 =
        parseNumberArray(document.getElementById("p2-v1").value);
    const v2 =
        parseNumberArray(document.getElementById("p2-v2").value);
    const out =
        document.getElementById("p2-out");
    try {
        const dp = dotProduct(v1, v2);
        const ortho = areOrthogonal(v1, v2);
        out.innerHTML = `
                    < strong > Dot product:</strong > ${ dp }<br/>
                    
            <strong>Orthogonal?</strong> ${ ortho ? "Yes (dot product =o)" : "No" } `;
    }
    catch (e) {
        out.textComment = e.message;
    }
});


document.getElementById("p1-set1").value = "3,1,7,9";
document.getElementById("p1-set2").value = "2,4,1,9,3";
document.getElementById("p2-v1").value = "1,2,3";
document.getElementById("p2-v2").value = "-3,6,-3";

});



