import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Finder from "./pages/finder";
import Prescription from "./pages/prescription";
import Pdf from "./pages/pdf";
import Add from "./pages/Add";
import FileViewer from "./pages/FileViewer";
import CameraUploader from "./pages/cam";
import Homepage from "./pages/Homepage";
import NewLogin from "./pages/newLogin";
import ForgotPassword from "./pages/fp";
import Sent from "./pages/sent";
import Change from "./pages/Change";
import Dashboard from "./pages/dashboard";
import Patient from "./pages/patient";
import Newadd from "./pages/newadd";
import Res from "./pages/res";
import Newpres from "./pages/newpres";
import Newpdf from "./pages/newpdf";
import Myacc from "./pages/myacc";
import Edit from "./pages/edit";
import Bio from "./pages/bio";
import CP from "./pages/cp";
import { ChatProvider } from "./pages/Chatprovider";
import Chatbot from "./pages/Chatbot";
import ViewPres from "./pages/ViewPres";
import Support from "./pages/support";
import Confirm from "./pages/Confirm";

const Layout = () => (
  <>
    <Chatbot />
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/finder" element={<Finder />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/cam" element={<CameraUploader />} />
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/support" element={<Support />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/newadd" element={<Newadd />} />
        <Route path="/res" element={<Res />} />
        <Route path="/newpres" element={<Newpres />} />
        <Route path="/viewpres" element={<ViewPres />} />
        <Route path="/newpdf" element={<Newpdf />} />
        <Route path="/myacc" element={<Myacc />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/cp" element={<CP />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </main>
  </>
);

function App() {
  return (
    <>
      <ChatProvider>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </ChatProvider>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/newlogin" element={<NewLogin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/change" element={<Change />} />
      </Routes>
    </>
  );
}

export default App;
