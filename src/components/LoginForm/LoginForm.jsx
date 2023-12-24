import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import { IconContext } from 'react-icons';
import { FaKey } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { togglePasswordVisible } from 'helpers/showPassword';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      {/* con = Container for items in the form */}
      <div className={css.con}>
        {/* Start header Content */}
        <div className={css.headForm}>
          <h2>Log In</h2>
          {/* A welcome message or an explanation of the login form */}
          <p>login here using your email and password</p>
        </div>
        <br />
        <div className={css.fieldSet}>
          {/* user name */}
          <div className={css.inputWrap}>
            <span className={css.inputItem}>
              <IconContext.Provider value={{ size: 15 }}>
                <IoIosMail />
              </IconContext.Provider>
            </span>
            {/* user name Input */}
            <input
              className={css.loginFormInput}
              id="email"
              type="email"
              name="email"
              placeholder="email@mail.com"
              required
            />
          </div>
          <br />
          {/* Password */}
          <div className={css.inputWrap}>
            <span className={css.inputItem}>
              <IconContext.Provider value={{ size: 15 }}>
                <FaKey />
              </IconContext.Provider>
            </span>
            {/* Password Input */}
            <input
              className={css.loginFormInput}
              type="password"
              placeholder="Password"
              id="pwd"
              name="password"
              required
            />
            {/* Show/hide password */}
            <span>
              <button
                className={css.faEye}
                aria-hidden="true"
                type="button"
                onClick={togglePasswordVisible}
              >
                <IconContext.Provider value={{ size: 15 }}>
                  <FaEye />
                </IconContext.Provider>
              </button>
            </span>
          </div>
          <br />
          {/* button LogIn */}
          <button className={`${css.btn} ${css.logIn}`} type="submit">
            Log In
          </button>
        </div>
      </div>
    </form>
  );
};
