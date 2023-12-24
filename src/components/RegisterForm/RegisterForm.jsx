import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      {/* con = Container for items in the form */}
      <div className={css.con}>
        {/* Start header Content */}
        <div className={css.headForm}>
          <h2>Registration</h2>
          {/* A welcome message or an explanation of the login form */}
          <p>Enter here your username, email and password</p>
        </div>
        <br />
        <div className={css.fieldSet}>
          <div className={css.inputWrap}>
            <span className={css.inputItem}>
              <IconContext.Provider value={{ size: 15 }}>
                <FaUserCircle />
              </IconContext.Provider>
            </span>
            {/* user name Input */}
            <input
              className={css.loginFormInput}
              id="name"
              type="text"
              name="name"
              placeholder="@UserName"
              required
            />
          </div>
          <br />
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
              <button className={css.faEye} aria-hidden="true" type="button">
                <IconContext.Provider value={{ size: 15 }}>
                  <FaEye />
                </IconContext.Provider>
              </button>
            </span>
          </div>
          <br />
          {/* button LogIn */}
          <button className={`${css.btn} ${css.submits} ${css.signUp}`}>
            Sign Up
            <i className={`${css.fa} ${css.faUserPlus}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};
