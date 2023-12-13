import { Route, Routes } from "react-router-dom";
import TrangChu from "../TrangChu/TrangChu";
import DoNam from "../DoNam/DoNam";
import DoNu from "../DoNu/DoNu";
import New from "../New/New";
import DoTop from "../Top/DoTop";
import TypeDoNam from "../DoNam/TypeDoNam";
import TypeDoNu from "../DoNu/TypeDoNu";
import TypeNew from "../New/TypeNew";
import TypeDoTop from "../Top/TypeDoTop";
import CTSanPham from "../CTSP/CTSanPham";

function MainRouter() {
    return (
        <Routes>
            <Route path="/TrangChu" element={<TrangChu />}/>
            <Route path="/DoNam" element={<DoNam />}/>
            <Route path="/DoNam/:Type" element={<TypeDoNam />}/>
            <Route path="/DoNu" element={<DoNu />}/>
            <Route path="/DoNu/:Type" element={<TypeDoNu />}/>
            <Route path="/DoNew" element={<New />}/>
            <Route path="/DoNew/:Bit/:Type" element={<TypeNew />}/>
            <Route path="/DoTop" element={<DoTop />}/>
            <Route path="/DoTop/:Bit/:Type" element={<TypeDoTop />}/>
            <Route path="/ctsp" element={<CTSanPham />} />
        </Routes>
    )
}

export default MainRouter;