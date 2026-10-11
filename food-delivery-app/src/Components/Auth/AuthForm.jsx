function AuthForm({
  title,
  fields,
  buttonText,
  onSubmit,
  footerText,
  footerLinkText,
  onFooterClick,
}) {
  return (
    <div className="auth-card">
      <h2>{title}</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}

        <button type="submit">{buttonText}</button>
      </form>

      <p className="auth-footer">
        {footerText} <span onClick={onFooterClick}>{footerLinkText}</span>
      </p>
    </div>
  );
}

export default AuthForm;
