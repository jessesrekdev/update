document.getElementById('try-btn').addEventListener('click', () => {
    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
<title>My Page</title>
</head>
<body>
<h1>Hello, world!</h1>
<p>This is a paragraph.</p>
<body>
</html>
`;

    // Create a form to submit to CodePen
    const form = document.createElement('form');
    form.action = 'https://codepen.io/pen/define';
    form.method = 'POST';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify({
        title: "My HTML Example",
        html: htmlCode,
        js: "",
        css: ""
    });

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
});