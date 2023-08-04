import images from './images/photo.png'
import Photo from './Photo';
function Glavnaya() {
    return (
        <>
            <section>
              <div className="section_1">
                <div className='roditel1'>
                  <img   src={images} alt=""/>
                  <img   src={images} alt=""/>
                  <img   src={images} alt=""/>
                  <img   src={images} alt=""/>
                </div>
              </div>
            </section>
            <section>
              <div className="section_2">
                <div className="roditel2">
                  <div className="info">
                    <p className="zag2">ОБО МНЕ</p>
                    <h3 className="name">Максим Бриляков</h3>
                    <div>Я семейный фотограф из города Санкт-Петербурга. <br/> <br/>

                    Каждая семья, каждый дом, каждый человек индивидуален и прекрасен по своему! Я вижу внутреннюю <br/> красоту людей, подчеркиваю достоинства и отражаю их в кадре. Снимаю истории о людях, о любви, <br/> о жизни, про настоящее, про чувства, про эмоции, про детство, про материнство и отцовство, про семью, <br/> про Вас! <br/> <br/>
                                    
                            Я очень люблю свое дело, люблю темные квартиры, непослушных деток, переживающих мам, <br/> пап не желающих фотографироваться. <br/> <br/>
                                    
                            Искренне верю и чувствую что помогаю Вам насладится и сохранить момент вашей жизни, сохранить <br/>естественно и красиво. Это суть моей профессии.
                    </div>
                  </div>
                  <div className="equipment">
                    <p className="zag1">ОБОРУДОВАНИЕ</p>
                    <h3 className="what">На что я снимаю</h3>
                    <ul>
                      <li className="obor">Фотоаппарат Fujifilm xt-4</li>
                      <li className="obor">Объектив 23 mm f1.4</li>
                      <li className="obor">Отражатель</li>
                      <li className="obor">Фотофонарь Lumus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section_3">
                <div className="roditel3">
                  <div className='myaim'></div>
                </div>
              </div>
            </section>
            <section>
              <div className="section_4">
                <div className="roditel4">
                  
                    <img className='da'  src={images} alt=""/>
                    <img className='da' id='yes' src={images} alt=""/>
                    <img className='da' id='yes' src={images} alt=""/>
                    <img className='da' id='yes' src={images} alt=""/>
                      
                  
                    <img   src={images} alt=""/>
                    <img id='yes' src={images} alt=""/>
                    <img id='yes' src={images} alt=""/>
                    <img id='yes' src={images} alt=""/>
                  
                </div>
              </div>
              <div id = 'photo'>
                <div id='subphoto'><h2>ЗАБРОНИРОВАТЬ ФОТОСЕССИЮ</h2></div>
              </div>
            </section>
            <section>
              <div className='section_5'>
                <div className='roditel5'>
                  <div className='sec5content'>
                    <Photo />
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
export default Glavnaya;