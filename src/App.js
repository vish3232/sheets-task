import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import Newquestion1 from './components/newquestion-1/Newquestion1';
import Newquestion2 from './components/newquestion-2/Newquestion2';
import Newquestionsidebar from './components/newquestion-sidebar/Newquestionsidebar';
import Notification from './components/notification/Notification';
import Password from './components/password/Password';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            <Navbar />

            {/* <div className="container">
                <Newquestionsidebar />
                <div className="right-container">
                    <Newquestion1 />
                    <Newquestion2 />
                </div>
            </div> */}

            {/* <Notification/> */}
            <div className="container">
                <Sidebar />
                <div className="right-container">
                    {/* <Password /> */}
                    <Profile/>

                </div>
            </div>
        </div>
    );
}

export default App;
