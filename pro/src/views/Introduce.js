import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import introduce from '../css/Introduce.module.css';
import common from '../css/Public.module.css';
import {Icon,BackTop} from 'antd';
export default class Introduce extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
               {/*顶部*/}
				 <div className={common.wrap}>
                <div className={common.hwrap}>
                {/*顶部左*/}
                <div className={common.username_login}>
                Hi~ 欢迎光临 
                <img className={common.bulletin_icon} src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/header-icon.png"/>
                    </div>
                    {/*顶部右*/}
                    <div className={common.m_service}>
                    <span id="loginBar">
                        <NavLink to="/login" className={common.login_btn}>登录</NavLink>
                        <NavLink to="/register" className={common.signup_btn}>注册</NavLink>
                    </span>
                    {/*<span id="memberBar" style={{display:'none'}}>
                        您好,<span id="uname"></span>!
                        <a href="#">会员中心</a>&nbsp;
                        <a href="#">退出</a>
                    </span>*/}
                    <div className={common.guan}>关注公众号
                        <div className={common.toup} >
                    <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/gzh-icon.jpg" alt="" style={{width:'100%'}}/>
                            <span>微信扫一扫</span><span>关注公众号</span>
                        </div>
                    </div>
                    <span className={common.fang} href="#" >防伪查询</span>
                    </div>
                    </div>
                </div>
                {/* 图标 */}
                <div className={common.midHeader}>
                    <div className={common.clearfix}>
                        {/* 图左*/} 
                        <div className={common.m_logo2}>
                            <NavLink to="/home"> <img src="http://mall.rossini.com.cn/public/images/25/8b/af/7833feb843e859e910d3817d694e4547f1f3849c.png?1554196720#w" alt="" style={{height:'60px'}}/></NavLink>
                        </div>
                        {/*列表*/}
                        <div className={common.m_list}>
                            <ul className={common.m_list2}>
                                    <li>
                                        <NavLink to="/product">全部商品</NavLink>
                                    </li>
                                    <li><NavLink to="/">男表</NavLink></li>
                                    <li><NavLink to="/">女表</NavLink></li>
                                    <li><NavLink to="/">情侣表</NavLink></li>
                                    <li><NavLink to="/">机械表</NavLink></li>
                                    <li><NavLink to="/introduce">品牌故事</NavLink></li>
                            </ul>
                        </div>
                        {/*搜索*/}
                        <div className={common.m_search2}>
                            <div className={common.searchbar}>
                                <div className={common.ser_bl}>
                                    <input className={common.x_input}  type="text" placeholder="搜索"/>
                                    <span></span>
                                </div>
                                <div className={common.ser_br}>
                                    <button type="submit" className={common.list_search}><i><Icon type="home" /></i></button>
                                    <a href="#"><i><Icon type="shopping" /></i><span>0</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               {/* 品牌故事 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/21/a2/41/f13ef2af659b259d852b3e562dc92f64ae0689b4.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 企业文化 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/96/34/22/be8a1a968b6c03679f9b246e533cd64e0045343a.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 国际展会 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/c8/44/b5/9a467b2cf3f2ce24b578dcadcc9b63ca32bdcfb0.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 发展历史 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/27/b2/56/829e9624f754d03ff104d00ebd773b2d687c79fa.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 品牌价值 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/25/aa/23/94b799fc4cd11962156ef9cab5f990d867dc1116.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
                {/* 实验室 */}
                <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/98/78/47/537506566b5a559747d8e771cd96d3938d0bca60.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 证书 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/63/d0/6a/3f01bb27e5efee453d1ac087e2717e7bb9bca2e0.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 企业 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/00/b2/9f/1b432f716577672d65f974f943bb438e937e3619.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 博物馆 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/55/1c/28/775dfa486716196c67d6a057bbb1a0c4b8fef606.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 时间的奥秘 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/35/85/dc/5ab6a4301398d57ae632d7b236ee5cfe42a73b10.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 车间 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/64/57/47/a5cf01b36d1fa1ac409da26ea7e9c2789ac1b2c9.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 设备 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/2b/94/48/63aa2e1be3f0eab5cc7379f3e6ec24bfc928832f.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 中心实验室 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/a7/d0/b6/c941692e639b8b2ac2bac22cfd579246e019c193.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 线下门店 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/80/b7/10/0f16360726f6a967471252fc05f0c20acc254037.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 品牌公益 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/53/b7/91/39204bd8ed4a950855d5d1b864576fe43947b650.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 爱心捐赠 */}
               <div className={introduce.content}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                                <img src="http://mall.rossini.com.cn/public/images/a7/ad/5f/ccdd76bade6065a34012746e5a3f4e5c98d63e4e.jpg" style={{width:'100%'}}/>
                            </a>
                        </div>
                    </div>
               </div>
               {/* 各种系列 */}
               <div className={introduce.content} style={{marginBottom:'20px'}}>
                    <div className={introduce.clip_content}>
                        <div className={introduce.clip_imgs_list}>
                            <a>
                            <NavLink to="/home"> <img src="http://mall.rossini.com.cn/public/images/84/b1/d1/36d7e20e748afc6bc64870e15421a810d865fe23.jpg" style={{width:'100%'}}/></NavLink>
                            </a>
                        </div>
                    </div>
               </div>
               	 {/* 底部 */}
				 <div className={common.footer} id="footer">
                    <div className={common.ser_box}>
                        <div className={common.fwrap}>
                            {/* 第一层 */}
                            <div className={common.foot_list2}>
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
                             <ul className={common.foot_info}>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_title}>
                                          <a className={common.link} href="#">新手上路</a>
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="商品退货保障">商品退货保障</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="积分奖励计划">积分奖励计划</a>
                                         </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="顾客必读">顾客必读</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_item}>
                                           <a className={common.link} href="#">购物指南</a>
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="网站免责声明">网站免责声明</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="体贴的售后服务">体贴的售后服务</a>
                                        </dd>
                                         <dd className={common.content_item}>
                                            <a href="#" title="非会员购物通道">非会员购物通道</a>
                                        </dd>
                                         <dd className={common.content_item}>
                                            <a href="#" title="会员等级折扣">会员等级折扣</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_title}>
                                         <a className={common.link} href="#">支付/配送方式</a>  
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="网上支付小贴士">网上支付小贴士</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="订单何时出库？">订单何时出库？</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="配送方式">配送方式</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_title}>
                                           <a className={common.link} href="#">购物条款</a> 
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="隐私保护政策">隐私保护政策</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="会员注册协议">会员注册协议</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="网站使用条款">网站使用条款</a>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_title}>
                                           <a className={common.link} href="#">支付/配送方式</a>
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="关于送货和验货">关于送货和验货</a>
                                        </dd>
                                         <dd className={common.content_item}>
                                            <a href="#" title="订单何时出库？">订单何时出库？</a>
                                         </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="配送方式">配送方式</a>
                                         </dd>
                                    </dl>
                                </li>
                                <li className={common.help_info}>
                                    <dl className={common.content_list}>
                                        <dt className={common.content_title}>
                                            <a className={common.link} href="#">购物条款</a> 
                                        </dt>
                                        <dd className={common.content_item}>
                                            <a href="#" title="隐私保护政策">隐私保护政策</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="会员注册协议">会员注册协议</a>
                                        </dd>
                                        <dd className={common.content_item}>
                                            <a href="#" title="网站使用条款">网站使用条款</a>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                            {/* 第二层右 */}
                            <div className={common.ftphone}>
                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/foot-logo.png" alt=""/>
                                <p>400-623-8608</p>
                                <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/gzh-icon.jpg" alt=""/>
                                <p>官方微信商城</p>
                            </div>
                            {/* 底层 */}
                            <div className={common.foot_zd}> 
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
                <div className={common.text} style={{textAlign:'center'}}> 
                        <div className={common.text}  style={{fontSize:'13.3333px',marginLeft:'-10px'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        Copyright © 2018-2019 &nbsp;珠海罗西尼表业有限公司
                        </div>
                        <div className={common.text}  style={{fontSize:'13.3333px'}}>
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44049102496286">
                    <img src="http://www.rossini.com.cn/templates/rossini/pc/images/batubiao.png" style={{marginRight:'5px'}}/>粤公网安备 4404910249   6286号</a>&nbsp;|&nbsp;
                    <a target="_blank" href="http://www.miibeian.gov.cn/">粤ICP备12016145号-3</a>&nbsp;&nbsp;
                    </div>
                    <p>&nbsp;</p>
                 </div>
                 {/* 客服 */}
                 <div className={common.ke}>
                     <div className={common.bj} >
                        <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/weixin2.png" alt="" style={{width: '100%'}}/>
                        <i>客服</i>
                        <div className={common.fu} >
                            <img src="http://mall.rossini.com.cn/public/images/f2/84/34/f75a67971f9f9ace48162743af336e16bd901e56.jpg" alt="" style={{width:'100%'}}/>
                            <span>扫描关注公众号</span><span>联系在线客服</span>
                        </div>
                     </div>
                 </div>
                 {/* 返回顶部 */}
                 <div className={common.ding}>
                 <BackTop>
                        <div className="ant_back_top_inner">
                        <img src="http://mall.rossini.com.cn/themes/qfshuhua/images/icon/docutop.png" alt="" style={{width: '100%'}}/>
                        </div>
                </BackTop>    
                 </div>
        </div>
        )
    }
}