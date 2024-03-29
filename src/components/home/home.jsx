import React from 'react'
import './home.css'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'
import img9 from '../../img/img9.png'
import img10 from '../../img/img10.png'
import Navbar from '../Navar/navbar'
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='listcontent'>
        <div className='timkiem'>
          <input type='tk' className='tk' />
          <button>Tìm kiếm</button>
        </div>
        <div className='pagetitle'>Danh mục các loài (181 Loài)</div>
        <div className='listbar'>
          <div className='listcheck'>
            <div className='listtitle'>Lọc theo bộ</div>
            <select className="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className='listcheck'>
            <div className='listtitle'>Lọc theo họ</div>
            <select className="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className='listcheck'>
            <div className='listtitle'>Lọc theo chi</div>
            <select className="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className='listcheck'>
            <div className='listtitle'>Lọc theo loài</div>
            <select className="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div class='homecontent'>
        <div class="parent">
          <div class="div1">
            <img src={img1} className='img' />
            <div className='columntitle'>Peace Lily</div>
          </div>
          <div class="div2">
            <img src={img2} className='img' />
            <div className='columntitle'>Onion</div>
          </div>
          <div class="div3">
            <img src={img3} className='img' />
            <div className='columntitle'>Coriander</div>
          </div>
          <div class="div4">
            <img src={img4} className='img' />
            <div className='columntitle'>Dill</div>
          </div>
          <div class="div5">
            <img src={img5} className='img' />
            <div className='columntitle'>Schefflera octophylla</div>
          </div>
          <div class="div6">
            <img src={img6} className='img' />
            <div className='columntitle'>Areca Palm</div>
          </div>
          <div class="div7">
            <img src={img7} className='img' />
            <div className='columntitle'>Barbados-lily</div>
          </div>
          <div class="div8">
            <img src={img8} className='img' />
            <div className='columntitle'>European Michealmas Daisy</div>
          </div>
          <div class="div9">
            <img src={img9} className='img' />
            <div className='columntitle'>False Daisy</div>
          </div>
          <div class="div10">
            <img src={img10} className='img' />
            <div className='columntitle'>French marigold</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home