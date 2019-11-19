import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import index from '../css/Index.module.css';
import { Carousel,Icon } from 'antd';

export default class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/*顶部*/}
               <div className={index.wrap}>
                 <div className={index.hwrap}>
                {/*顶部左*/}
                <div className={index.username_login}>
                Hi~ 欢迎光临 
                <img className={index.bulletin_icon} src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/header-icon.png"/>
                 </div>
                 {/*顶部右*/}
                 <div className={index.m_service}>
                    <span id="loginBar">
                        <a href="#" className={index.login_btn}>登录</a>
                        <a href="#" className={index.signup_btn}>注册</a>
                    </span>
                    {/*<span id="memberBar" style={{display:'none'}}>
                        您好,<span id="uname"></span>!
                        <a href="#">会员中心</a>&nbsp;
                        <a href="#">退出</a>
                    </span>*/}
                    <span className={index.guan}>关注公众号
                        <i className={index.toup} >
                    <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/gzh-icon.jpg" alt="" style={{width:'100%'}}/>
                            <span>微信扫一扫</span><span>关注公众号</span>
                        </i>
                    </span>
                    <span className={index.fang} href="#" >防伪查询</span>
                 </div>
                 </div>
               </div>
               {/* 图标 */}
               <div className={index.midHeader}>
                    <div className={index.clearfix}>
                        {/* 图左*/} 
                        <div className={index.m_logo2}>
                            <a href="/">
                                <img src="http://mall.rossini.com.cn/public/images/25/8b/af/7833feb843e859e910d3817d694e4547f1f3849c.png?1554196720#w" alt="" style={{height:'60px'}}/>
                            </a>
                        </div>
                        {/*列表*/}
                        <div className={index.m_list}>
                            <ul className={index.m_list2}>
                                    <li><a href="#">全部商品</a></li>
                                    <li><a href="#">男表</a></li>
                                    <li><a href="#">女表</a></li>
                                    <li><a href="#">情侣表</a></li>
                                    <li><a href="#">机械表</a></li>
                                    <li><a href="#">品牌故事</a></li>
                            </ul>
                       </div>
                       {/*搜索*/}
                       <div className={index.m_search2}>
                            <div className={index.searchbar}>
                                <form action="" method="post" id="searchbar">
                                    <input className={index.x_input} type="text" name="search_keywords"/>                      
                                    <button type="submit" className={index.list_search}><i><Icon type="home" /></i></button>
                                    <a href="#"><i><Icon type="shopping" /></i><span>0</span></a>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
               {/* 轮播 */}
                <div className={index.lun}>
                    <Carousel autoplay>
                        <div>
                        <img src="http://mall.rossini.com.cn/public/images/82/b4/a5/070feb40764e5a1799151bd44890d3bda355b9b1.jpg"/>
                        </div>
                        <div>
                        <img src="http://mall.rossini.com.cn/public/images/84/04/4b/eda007ea5334d15c3f7e938018bdb5dc755ca296.jpg"/>
                        </div>
                        <div>
                        <img src="http://mall.rossini.com.cn/public/images/95/5e/f5/0ec13649d325e88806e093427c6f428bf945f28c.jpg"/>
                        </div>
                        <div>
                        <img src="http://mall.rossini.com.cn/public/images/81/bd/dc/c9da4ba5f43d2c23407b17d1cd2ab32403e9acd7.jpg"/>
                        </div>
                        <div>
                            <img src="http://mall.rossini.com.cn/public/images/f4/0f/96/31d03831bf3adaa117d996295466332932e5df09.jpg"/>
                        </div>
                        <div>
                            <img src="http://mall.rossini.com.cn/public/images/c7/b0/b1/11aaa26b57ca46638f31e169df4b5e64b9309d89.jpg"/>
                        </div>
                        <div>
                            <img src="http://mall.rossini.com.cn/public/images/06/03/68/51ad9a87b12760997dc44e700f23c87ac303132f.jpg"/>
                        </div>
                    </Carousel>
                </div>
                {/* 热销 */}
                <div className={index.clip_content}>
                    <div className={index.clip_imgs_list}>
                        <a href="#">
                        <img src="http://mall.rossini.com.cn/public/images/e4/26/2a/6e8ef89476eaf7e3d4229fcd25c7a11cbdc4e1b6.jpg"/>
                        </a>
                    </div>
                </div>
                {/* 送礼 */}
                    <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'100px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/a1/06/76/1aeb9e9860f23175d689131d88b6b840455b0e29.jpg" style={{height:'770px'}}/>
                            </a>
                        </div>
                    </div>
                {/* 男表专区 */}
                <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/c2/55/dd/fb029e3cc1cfd260b00299ce2fa77613d75b8dfe.jpg" style={{height:'890px'}}/>
                            </a>
                        </div>
                </div>
                {/* 有型专区 */}
                <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px',marginTop:'30px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/49/86/23/24c8a6e9e3206073112e2a0f69b2f248d668bc4d.jpg" style={{height:'868px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 绅士专区 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/a4/c3/81/098fd4e08e55ccdce7537a2e3cce17279ae94dad.jpg" style={{height:'637px'}}/>
                            </a>
                        </div>
                </div>
                {/* 女表专区 */}
                <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px',marginTop:'-140px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/32/db/e2/ba639361e62159d50f0125c4481966dd25d7448d.jpg" style={{height:'819px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 女友专区 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/d5/cb/98/76c60ac9d484c3e482093bdd1d26308bf1bab7e8.jpg" style={{height:'747px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 女友系列 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/09/ed/53/867739b7b344e370920a14c9000273b40f06c328.jpg" style={{height:'664px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 情侣专区 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px',marginTop:'-100px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/38/f2/0b/f3e716c06d87be39a3835a35f3346015b01cd454.jpg" style={{height:'849px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 情侣系列1 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/cd/22/be/c2ccd037f6a727048ba0fbff9ed11ba037a089d0.jpg" style={{height:'691px'}}/>
                            </a>
                        </div>
                </div>
                 {/* 情侣系列2 */}
                 <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px',marginTop:'-120px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/55/f4/82/74574160f4aeb1ad0aa294b80757bf48633773c6.jpg" style={{height:'666px'}}/>
                            </a>
                        </div>
                </div>
                {/* 罗西尼 */}
                <div className={index.clip_content}>
                        <div className={index.clip_imgs_list} style={{marginLeft:'20px',marginTop:'-120px'}}>
                            <a href="#">
                            <img src="http://mall.rossini.com.cn/public/images/82/94/d6/a1a09afe1a46926a2ce77360086f15524370eeae.jpg" style={{height:'672px'}}/>
                            </a>
                        </div>
                </div>
                {/* 底部 */}
                <div className={index.footer} id="footer">
                    <div className={index.ser_box}>
                        <div className={index.fwrap}>
                            {/* 第一层 */}
                            <div className={index.foot_list2}>
                                    <ul>
                                        <li>
                                            <a>
                                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-icon.png" alt="" />
                                                <span>品质保障</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-icon2.png" alt=""/>
                                                <span>全场免邮</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-icon3.png" alt=""/>
                                                <span>个性定制</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-icon4.png" alt="" />
                                                <span>专业售后</span>
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                            {/* 第二层 */}
                             {/* 第二层左 */}
                             <ul className={index.foot_info}>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_title}>
                                          <a className={index.link} href="#">新手上路</a>
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="商品退货保障">商品退货保障</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="积分奖励计划">积分奖励计划</a>
                                         </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="顾客必读">顾客必读</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_item}>
                                           <a className={index.link} href="#">购物指南</a>
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="网站免责声明">网站免责声明</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="体贴的售后服务">体贴的售后服务</a>
                                        </dd>
                                         <dd className={index.content_item}>
                                            <a href="#" title="非会员购物通道">非会员购物通道</a>
                                        </dd>
                                         <dd className={index.content_item}>
                                            <a href="#" title="会员等级折扣">会员等级折扣</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_title}>
                                         <a className={index.link} href="#">支付/配送方式</a>  
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="网上支付小贴士">网上支付小贴士</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="订单何时出库？">订单何时出库？</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="配送方式">配送方式</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_title}>
                                           <a className={index.link} href="#">购物条款</a> 
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="隐私保护政策">隐私保护政策</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="会员注册协议">会员注册协议</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="网站使用条款">网站使用条款</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_title}>
                                           <a className={index.link} href="#">支付/配送方式</a>
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="关于送货和验货">关于送货和验货</a>
                                        </dd>
                                         <dd className={index.content_item}>
                                            <a href="#" title="订单何时出库？">订单何时出库？</a>
                                         </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="配送方式">配送方式</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={index.help_info}>
                                    <dl className={index.content_list}>
                                        <dt className={index.content_title}>
                                            <a className={index.link} href="#">购物条款</a> 
                                        </dt>
                                        <dd className={index.content_item}>
                                            <a href="#" title="隐私保护政策">隐私保护政策</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="会员注册协议">会员注册协议</a>
                                        </dd>
                                        <dd className={index.content_item}>
                                            <a href="#" title="网站使用条款">网站使用条款</a>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                            {/* 第二层右 */}
                            <div className={index.ftphone}>
                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-logo.png" alt=""/>
                                <p>400-623-8608</p>
                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/gzh-icon.jpg" alt=""/>
                                <p>官方微信商城</p>
                            </div>
                            {/* 底层 */}
                            <div className={index.foot_zd}> 
                                <div>
                                    <div>联系我们-CONTACT US</div>
                                    <p>咨询热线：400-623-8608</p>
                                    <p>售后服务中心：0756-3350875</p>
                                </div>
                                <div>
                                    <div>工作时间-WORK TIME</div>
                                    <p>购买咨询：周一至周五 8:30-12:00 13:00-17:00 节假日休息</p>
                                    <p>售后咨询：周一至周五 8:30-12:00 13:00-17:00 节假日休息</p>
                                </div>
                            </div>
                             
                        </div> 
                    </div>
                </div>
                <div className={index.text} style={{textAlign:'center'}}> 
                        <div className={index.text}  style={{fontSize:'13.3333px',marginLeft:'450px'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        Copyright © 2018-2019 &nbsp;珠海罗西尼表业有限公司
                        </div>
                        <div className={index.text}  style={{fontSize:'13.3333px'}}>
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496286">
                    <img src="http://www.rossini.com.cn/templates/rossini/pc/images/batubiao.png" style={{marginRight:'5px'}}/>粤公网安备 4404910249   6286号</a>&nbsp;|&nbsp;
                    <a target="_blank" href="http://www.miibeian.gov.cn/">粤ICP备12016145号-3</a>&nbsp;&nbsp;
                    </div>
                    <p>&nbsp;</p>
                 </div>
            </div>
        )
    }
}


