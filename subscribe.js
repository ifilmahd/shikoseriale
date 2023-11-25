document.addEventListener("DOMContentLoaded", function () {
    // Create the subscription form dynamically
    var subscribeFormContainer = document.getElementById("subscribeFormContainer");
    var dynamicSubscribeFormContainer = document.getElementById("dynamicSubscribeForm");

    // Existing subscription form creation
    var form = document.createElement("form");
    form.id = "subscribeForm";

    var label = document.createElement("label");
    label.for = "email";
    label.textContent = "Email:";

    var input = document.createElement("input");
    input.type = "email";
    input.id = "email";
    input.name = "email";
    input.required = true;

    var button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Subscribe";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    subscribeFormContainer.appendChild(form);

    // Provided HTML code for subscription section
    var ctaForm = document.createElement("form");
    ctaForm.action = ""; // Add your form action URL here
    ctaForm.className = "cta-form";

    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.placeholder = "Enter your email";
    emailInput.className = "email-field";

    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "cta-form-btn";
    submitButton.textContent = "Get started";

    ctaForm.appendChild(emailInput);
    ctaForm.appendChild(submitButton);

    dynamicSubscribeFormContainer.appendChild(ctaForm);

    // Event listener for the dynamically created subscription form
    ctaForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Your subscription logic here
        console.log("Form submitted!");
    });
});
