// Object holding tutorial content for each language
const tutorials = {
    html: `
        <h3>HTML Tutorial</h3>
        <p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    <a href="HTMLOutput.html">Example Output</a>`,
    css: `
        <h3>CSS Tutorial</h3>
        <p>CSS stands for Cascading Style Sheets. It controls the look and layout of a web page.</p>
        <pre><code>body {
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
}</code></pre>
    <a href="HTMLOutputtest.html">Exanple Output</a>`,
    javascript: `
        <h3>JavaScript Tutorial</h3>
        <p>JavaScript is a programming language used to create interactive effects within web browsers.</p>
        <pre><code>function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('World'));</code></pre>
    Output Console: Hello, World!`,
    python: `
        <h3>Python Tutorial</h3>
        <p>Python is a high-level programming language known for its readability and versatility.</p>
        <pre><code>def greet(name):
    return f'Hello, {name}!'

print(greet('World'))</code></pre>
    Output Terminal: Hello, World!`,
    csharp: `
        <h3>C# for Unity Tutorial</h3>
        <p>C# is a programming language used for creating scripts in Unity. Here’s a basic example:</p>
        <pre><code>using UnityEngine;

public class HelloWorld : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Hello, Unity!");
    }
}</code></pre>
    Output Debug Console: Hello, Unity!`
};

// Function to display the content for the selected language
function showContent(language) {
    const contentDiv = document.getElementById(`${language}-content`);
    if (contentDiv) {
        contentDiv.innerHTML = tutorials[language];
    }
}

// Optional: Event listener to handle button clicks and show the content
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('onclick').match(/'(\w+)'/)[1];
            showContent(sectionId);
        });
    });
});
