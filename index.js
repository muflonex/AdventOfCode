const resolve = async _ => {
    const response = await fetch('input-test.txt');
    const responseText = await response.text();
    const entries = responseText.trim().split(`\n\n`);
    console.log(entries);
}
resolve();