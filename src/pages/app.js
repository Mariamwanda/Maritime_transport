const [errors, setErrors] = useState({ name: null, email: null });

const onSubmit = (e) => {
  const name = form.elements.name.value;
  const email = form.elements.email.value;

  let errors = { name: null, email: null };

  if (!name) errors.name = 'Name is required';

  if (!email) errors.email = 'Email is required';

  // email length
  if (email.length > 50) errors.email = 'Email is too long';

  if (email.length < 5) errors.email = 'Email is too short';

  if (errors.name || errors.email) {
    setErrors(errors);
    return;
  }

  alert(name, email);
};