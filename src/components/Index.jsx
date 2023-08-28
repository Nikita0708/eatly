import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './Main';
import { Menu } from 'components/Menu';
import { Blog } from 'components/Blog';
import { Pricing } from 'components/Pricing';
import { Contact } from 'components/Contact';
import { Article } from './Article';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import { ForgetPassword } from './ForgetPassword';
import Aos from 'aos';

export const Index = () => {
  Aos.init();
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/eatly/" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/eatly/Menu" element={<Menu />} />
        <Route path="/eatly/Contact" element={<Contact />} />
        <Route path="/eatly/Blog" element={<Blog />} />
        <Route path="/eatly/Pricing" element={<Pricing />} />
        <Route path="/eatly/Article" element={<Article />} />
        <Route path="/eatly/LogIn" element={<LogIn />} />
        <Route path="/eatly/SignUp" element={<SignUp />} />
        <Route path="/eatly/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
};
