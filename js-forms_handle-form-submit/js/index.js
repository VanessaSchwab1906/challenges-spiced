console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target.elements;
  const data = {
    firstName: formData.firstName.value,
    lastName: formData.lastName.value,
    age: formData.age.value,
    email: formData.email.value,
    complaint: formData.complaint.value,
    details: formData.details.value,
    badness: formData.badness.value,
    orderDate: formData.orderDate.value,
    tos: formData.tos.value,
  };

  console.log(data);
});
