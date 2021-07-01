import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";

export class Termcondition extends Component {
    render() {
        return (
            <React.Fragment>
            <Header />
                  {/* <div style={{ backgroundColor: "whitesmoke" }}> */}
                <div className="container">
                    <div className="termandconditionsection" id="te-m-co-se-mr-v">
                            <div className="row">
                                <div className="col-md-2">
                                  <MenuComponent/>
                                   
                                </div>
                                <div className="col-md-10" id="rectangledivsection">
                                    <div className="termconditionbody">
                                    <h5 className="termheadinStyle">Terms</h5>
                                    <p className="termsAgreementsection">Terms of Use Agreement</p>
                                    <p className="agreement-style"> Welcome to Jaypore, the website and online service of Jaypore E-Commerce Pvt.Ltd.("Jaypore," "we," Or "us").
                                        This page explains the terms by which you may use our online and/or mobile services, website and software provided on or in connection with Jaypore(collectively the "Service").
                                        By accessing or using the Service,you agree that you have read, understood and agree to be bound by these 
                                        Terms of Use (the "Agreement"), whether or not you are a registered user of our service. 
                                    </p>
                                    <p className="termsAgreementsection">Use of Our Service</p>
                                    <p className="agreement-style">You may use the Service only if you can form a binding contract with Jaypore, and only in
                                        compliance with this Agreement and all applicable state, national and international laws, rules and regulations.
                                        If you are under 18, your parent or guardian must enter into this Agreement on your behalf and will be responsible 
                                        for your use of and access to the Service;this includes financial responsibility for any items 
                                        you purchase through the Service. Any use or access to the Service by anyone under 13 is strictly prohibited
                                        and in violation of this Agreement. If you are 13, please do not attempt to register for the Service or send any information about 
                                        yourself to us, including your name, address, telephone number, or email address. If you learn that we have collected 
                                        personal information as quickly as posssible. If you believe that we might have any information from or about anyone under 
                                        13, please contact us at<span><a href="mailto:hello@jaypore.com" className="jayporegmailcolor"> hello@jaypore.com</a> </span>. The Service is not available to any Users previously removed from the Service by 
                                        Jaypore. Jaypore reserves all rights not expressly granted under this Agreement. Any attempt by you to transfer any of the rights, duties 
                                        or obligations hereunder, except as expressly provided for in this Agreement, is void.     
                                    </p>
                                    <p className="termsAgreementsection">Jaypore Accounts</p>
                                    <p className="agreement-style">The Service is available through Facebook's "Facebook Connect" service. [You must have 
                                        an active Facebook account in order to access the Service through Facebook connect], and you hereby represent and warrant that 
                                        you have read and agreed to be bound by all applicable Facebook policies and will act in accordance 
                                        with those policies, in addition to your obligation under this Agreement. If you access the 
                                        Service through Facebook connect, Jaypore may require that your Jaypore user ID be the same as your user className
                                        for Facebook. If you sign into Jaypore through Facebook Connect, You will provide your Facebook account credentials to
                                        Jaypore and you are consenting to have the information in that account transmitted into your Jaypore account, and you agree
                                        that you shall only use Facebook accounts owned by you, and not by any other person or entity.</p>
                                        <div className="agreenottoEngage" style={{marginLeft:30}}>
                                        <p className="mediumprohibitedActivity">You agree not to engage in any of the following prohibited activities in connection with the 
                                            Services:
                                        </p>
                                        <div className="agreement-style">
                                        <p><span>(i)</span> copying, distributing or disclosing any part of the Service in any medium, including without 
                                        limitation by any automated or non-automated "scraping"; </p>
                                        <p><span>(ii)</span> using any automated system, including without limitation "robots","spider","offline reader", etc.,to access
                                        the Service in a manner that sends more request messages to the Jaypore servers than a human can reasonably produce in the same 
                                        period of time by using a conventional on-line web browser (except that , subject to the privacy settings of our Users, Jaypore grants
                                        the operators of public search engines revocable permission to use spiders to copy materials from Jaypore for the sole purpose of 
                                        and solely to the y necessary for creating publicly available searchable indices of the materials
                                        , but not caches or archives of such materials);</p>
                                        <p><span>(iii)</span> transmitting spam, chain letters, or other unsolicited email;</p>
                                        <p><span>(iv)</span> attempting to interfere with, compromise the system integrity or security or decipher any transmissions
                                            to or from the servers running the Service;
                                        </p>
                                        <p><span>(v)</span> taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load 
                                        on our infrastructures;</p>
                                        <p><span>(vi)</span> uploading invalid data, viruses, worms, or other software agents through the Service;</p>
                                        <p><span>(vii)</span> collecting or harvesting any personally  identifiable information, including account names, from the Services;</p>
                                        <p><span>(viii)</span> using the Service for any commercial purposes;<spam>(ix)  </spam>impersonating another person or otherwise misrepresenting your 
                                        affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity; <span>interfering with the proper working of the Service;</span> </p>
                                        <p><span>(ix)</span> impersonating  another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud ,hiding or attempting to hide 
                                        your identity;</p>
                                        <p><span>(x)</span> interfering with the proper working of the Service;</p>
                                        <p><span>(xi)</span> accessing any content on the Service through any technology  or means other than those provided or authorized by the Service;</p>
                                        <p><span>(xi)</span> bypassing the measures we may use to prevent or restrict access to the Services or the content therein, or </p>
                                        <p><span>(xii)</span> decompiling reverse engineering, or otherwise attempting to obtain the source code of the service.</p>
                                        </div>
                                        </div>
                                        <p className="agreement-style">We may, without prior notice, change the Service, stop providing the Service or features of the Service<span>(to you or generally),</span> or create a usage 
                                        limits for the Service. We may permanently or temporarily termiante or suspend your access to the Service without notice or liability to Jaypore
                                        , for any reason or for any no reason, including if in our sole determination you violate any provision of this Agreement. Upon termination 
                                        of this Agreement of your access to the Service for any reason or no reason, you will continue to be bound by the terms of this Agreement
                                        which, by their nature, should survive termination, including without limitation ownership provisions, warrantly disclaimers, indemnity, and limitations of liability  </p>
                                        <p className="termsAgreementsection">Copy Right & Intellectual Property</p>
                                        <p className="agreement-style">All third party design featured on Jaypore are copyright and intellectual Property of their 
                                            respective designers and cannot be reproduced or transmitted in any form without the prior written permission of the designers. </p>
                                        <p className="termsAgreementsection">User Content</p>
                                        <p className="agreement-style">All third party design featured on Jaypore are copyright and intellectual Property of their 
                                            respective designers and cannot be reproduced or transmitted in any form without the prior written permission of the designers. </p>
                                            <div className="agreenottoEngage" style={{marginLeft:30}}>  
                                            <p className="mediumprohibitedActivity">You agree not to post user User Content that: </p>
                                            <div className="agreement-style">
                                            <p><span>(i)</span> may create a risk of harm, loss, physical or mental injury, emotional distress, death ,disability, disfigurement, or physical or mental illness to you, 
                                            to any other person, or to any animal;</p>
                                            <p><span>(ii)</span> may create a risk of any other loss or damage to any person or Property;</p>
                                            <p><span>(iii)</span> seeks to harm or exploit children by exposing them to inappropriate content, asking for personally identifiable details or otherwise;</p>
                                            <p><span>(iv)</span> may constitute or contribute to a crime or tort;</p>
                                            <p><span>(v)</span> contains any information or content that is illegal <span>(including, without limitation, the disclosure of insider information under security law
                                                or of another party's trade secrets);</span></p>
                                                <p><span>(vi)</span> contains any information or content  that you donot have a right to make available under any law or under contractual or fiduciary relationships; or</p>
                                                <p><span>(vii)</span> contains any information or content that you know is not correct and current. You agree that any User Content
                                                    that you post does not and will not violate  third-party  rights of any kind, including without limitation any intellectual Property Rights<span>(as defined below)</span> or right of privacy. To the extent that your User Content contains music, you hereby represent that you are the owner of or possess all Rights
                                                    to the copyright rights,including without limitations the performance, mechanical, and sound recordings rights, with respect to each and every musical composition<span>(including lyrics)</span> and sound recording contained in such User Content  and have the power to grant 
                                                    the license granted below. Jaypore reserves the right, but it is not obligated ,to reject and/or remove any User Content that Jaypore believes, 
                                                    , in its sole discretion, violates these provisions. You understand that publishing that your User Content on the Service is not a substitute for registering it with the U.S. Copyright Office, the Writer's Guild of America, or any other rights organization.
                                                    In connection with your User Content, you affirm ,represent and warrant the following:    
                                                      </p>

                                                      <li className="pt-jk-nv-st"></li> <p className="pr-wr-nv-us-jp">  You have the written consent of each and every identifiable natural person in the User Content to use such person's name or likeness in the manner contemplated by the Service and this Agreement, each such person has released you from any liability that may arise in relation to such use. </p>
                                                     <li className="pt-jk-nv-st"></li> <p  className="pr-wr-nv-us-jp"> Jaypore may exercise the rights to your User Content that are granted to Jaypore under this Agreement, without payment of any guild fees, residuals, Payments, fees, or royalties payable under any collective bargaining agreement or otherwise.
                                                      By posting any User Content on the Service, you hereby expressly grant, and you represent and warrant that you have a right to 
                                                      grant, to Jaypore a royalty-fee, sub-licensable, transferable, perpetual, irrevocable, worldwide license to use,
                                                      reproduce , modify, publish, list information regarding, edit, translate, distribute, syndicate, publicly perform, publicly dispaly, and make derivative works of all such Users 
                                                      Content and User name, voice, and/or likeness as contained in your User Content, in whole 
                                                      or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service 
                                                      and Jaypore's <span>(and its successors's and affiliates' )</span> business,including without limitation for promoting and redistributing part or all of the Service
                                                      <span>(and derivative works thereof)</span> in any media formats and through any media channels;however,Jaypore 
                                                      will only share your personally identifiable information in accordance with our then-current Privacy Policy. You also hereby 
                                                      grant each User of the Service a non-exclusive license to access your User Content through the Service ,and to use, reproduce, distribute, dispaly and
                                                      perform such User Content as permitted through the functionality of the Service and under this Agreement.</p>
                                                      
                                </div>
                            </div>
                            <p className="termsAgreementsection">Jaypore Service</p>
                            <div className="agreement-style">
                            <p>We may make available software to access the Service via a mobile device<span>("Mobile Software ").</span> To use the Mobile Software you must have a 
                            mobile device that is compatible with the Mobile Service. Jaypore does not warrant that the Mobile Software will be compatible with your mobile 
                            device. Jaypore hereby grants you a non-exclusive, non-transferable, revocable license to use a compiled code copy of the Mobile Software
                             for one Jaypore account on one mobile device owned or leased solely by you,for your personal, non-commercial use. You may not: 
                              </p>
                              <div className="agreenottoEngage" style={{marginLeft:30}}>
                                 <p><span>(i)</span> modify, disassemble, decompile or reverse engineer the Mobile Software, except to the extent 
                                 that such restriction is expressly prohibited by law;</p>
                                 <p><span>(ii)</span> rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Mobile Software to any 
                                 third party or use the Mobile Software to provide time sharing or similar services for any third party;</p>
                                 <p><span>(iii)</span> make any copies of the Moile Software;</p>
                                 <p><span>(iv)</span> remove, circumvent, disable, damage or otherwise interfere with security-related features 
                                 of the Mobile Software, features that prevent or restrict use or copying of any content accessible through the Moile Software, or features that enforce limitations on use of the Mobile Software; or 
                            </p>
                            <p><span>(v)</span> delete the copyright and/or other proprietary rights notices on the Mobile Software. You acknowledge that Jaypore may from time to time issue upgraded versions
                            of the Mobile Software, and may automatically electronically upgrade the version of the Mobile Software that you are using on your 
                            mobile device, and agree that the terms and conditions of this Agreement will apply to all such upgrades. Any third-party code that may be incorporated in the Mobile Software
                            is covered by the applicable open source or third-party license  EULA, if any, authorizing use of such code. The foregoing license 
                            grant is not a sale of the Mobile Software or any copy thereof, and Jaypore or its third party partners or suppliers retain all right 
                        , title, and interest in the Mobile Software<span>(and any copy thereof).</span>If the Mobile Software is being acquired on behalf of the 
                        United States Government, then the following provision applies. Use, duplication, or disclosure of the Mobile Software by the U.S. Government
                         is subject to restriction set forth in this Agreement and as provided in DFARS 227.7202-1(a) and 227.7202-3(a) (1995) ,DFARS
                          252.227-7013(c)(1) (ii) (OCT 1988), FAR 12.212(a) (1995),FAR 52.227-19, or FAR 52.227-14(ALT iii), as applicable. The Mobile Software 
                          originates in the United States, and is subject to United States export laws and regulations. The Mobile Software may not exported
                          or re-exported to certain countries or those persons or entities prohibited from receiving export from United States. In addition, the Mobile Software may be subject to the import and export laws of other countries. You agree to comply with all United States and foreign laws related to use of the Mobile Software and the Jaypore Service.     </p>
                                </div>
                                </div>
                                <p className="termsAgreementsection">Mobile Software from iTunes </p>
                                <p className="mediumprohibitedActivity">Our Property Rights</p>
                                <p className="agreement-style">You may choose to or we may invite you to submit comments or ideas about the Service, including  without 
                                    limitation about how to improve the Service or our products("ideas"). By submitting any idea, you agree that your 
                                    disclosure is gratuitous, unsolicited and without restriction and will not place Jaypore under any fiduciary or other obligation, 
                                    and that we are free to use the idea without any additional compensation to you, and/or to disclose the idea on a non-confidential basic
                                    or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Jaypore does not waive any rights to use 
                                    similar or related ideas previously known to Jaypore, or developed by its employees, or obtained from sources other than you.
                                    Jaypore may provide Jaypore members referral credits when members invite their friends to join Jaypore ("Referral Credits" ). Referral
                                    Credits may be awarded to the referrer when her friends join, as well as when her friends make their first purchases.
                                    <p>All credits, referral or otherwise can be used on a minimum shopping cart subtotal(pre shipping) amount of <span className="bgamountbold">$40.</span></p> 
                                </p>
                                <p className="termsAgreementsection">Billing Policies</p>
                                <p className="agreement-style">If you purchase an item through the Service, your purchase will be processed in accordance with the "orders" section of 
                                    our Help section, delivered to you according to our Shipping Policies, and, if applicable,returns  will be handled in accordance 
                                    with our Return Policy,all of which are incorporated herein by this reference.
                                </p>
                                <p className="termsAgreementsection">Payment Information: Taxes </p>
                                <p className="mediumprohibitedActivity">Privacy</p>
                                <div className="agreement-style">
                                <p > Jaypore cares about the integrity and security of your personal information.However, we can not guarantee
                                that unauthorized third parties will never be able to defect our security measures or use your personal information for improper purposes.
                                You acknowledge that you provide your your personal information at your own risk.  </p>
                                <p>Since we respect artist and content owner rights, it is Jaypore's policy  to respond to alleged infringement notices that  comply
                                    with the Digital millennium Copyright Act of 1998 ("DMCA").
                                </p>
                                <p>Identification of the copyrighted work that you claim has been infringed;</p>
                                <p>Information  reasonably sufficient to permit Jaypore to contact you, such as your address, telephone number, and e-mail address;</p>
                                <p>A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act 
                                    on behalf of the owner. </p>
                                    <p>Once proper, bona fide infringement notification is received by the Designated DMCA Agent listed below, it is our policy:</p>
                                </div>
                                <div className="agreenottoEngage" style={{marginLeft:30}}>  
                                <div className="agreement-style">
                                    <p> To remove or disable access to the infringing material;</p>
                                    <p>That repeat offenders will have the infringing material removed from the system and that we will terminate such content provider's,
                                         member's or user's access to the Service.
                                
                                    </p>
                                    <p>If the content provider, member or user believe that the material that was removed <span>(or to which access was disabled) </span> is not 
                                    infringing,or the content provider, member or user believes that it has the right to post and use such material from the copyright
                                     owner, the copyright owner's agent, or pursuant  to the law, the content provider, member or user must send a counter-notice containing
                                     the following information to the Designated DMCA Agent listed below: 
                                     </p>
                                     <p> A physical or electronic signature of the content-provider, member or user;</p>
                                     <p>A statement that the content provider, member or user has a good faith belief that the material 
                                         was removed or disabled as a result of mistake or misidentification of the material;
                                     </p>
                                     <p>Email: <span><a href="mailto:hello@jaypore.com" className="jayporegmailcolor">hello@jaypore.com</a></span></p>

                                </div>
                                </div>
                                <div className="agreement-style">
                                <p>Please note that this procedure is exclusively for notifying jaypore and its affiliates that your copyrighted material has been infringed. The 
                                    preceding requirements are intended to comply with Jaypore's right and obligations under the DMCA, including  17 U.S.C. $512(c), but 
                                    do not constitute legal advice. It may be advisable to contact an attorney regarding your rights and obligations under the DMCA and other 
                                    applicable laws.
                                </p>
                                <p>This service may contain links to third-party websites, advertiders, services, special offers, or other events or activities that not owned or controlled by Jaypore.
                                    Jaypore does not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access a
                                    third party website from the the Service, such as through Facebook Connect, you do sit at your own risk, and 
                                    you understand that this Agreement and Jaypore's Privacy Policy do not apply to your use of such sites.You expressly relieve Jaypore from 
                                    any and all liability arising from your use of any third-party website, service, or content. Additionally, you dealing with or participation in promotions of advertiders found on the Service, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertiders. You agree that Jaypore shall not responsible for 
                                    any loss or damage of any sort of relating to your dealings with such advertisers.    

                                </p>

                                <p>You agree to defend, indemnify and hold harmless Jaypore and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from 
                                    and against any and all claims, damages, obligations, losses, liabilities , costs or debt, and expenses(including but not limited to attorney's fees) arising from:
                                </p>
                                <div className="agreenottoEngage" style={{marginLeft:30}}> 
                                <p><span>(i)</span> your use of and access to the Service, including any data or content transmitted or received by you;</p>
                                <p><span>(ii)</span> your violation of any term of this Agreement, including without limitation your breach of any of the representations and warranties you make in this Agreement; </p>
                                <p><span>(iii)</span> your violation of any third-party right, including without limitation any right of privacy or intellectual Property Rights;</p>
                                <p><span>(iv)</span> your violation of any applicable law, rule or regulation;</p>
                                <p> <span>(v)</span> any claim or damages that arises as a result of any of your User Content or any that is submitted via your account; or</p>
                                <p><span>(vi)</span> any other party's access and use of the Service with your username, password or other appropriate security code. </p>
                                 </div>
                                 <p className=""> THE SERVICE AND ANY PRODUCT OR SERVICE YOU PURCHASE THROUGH THE SERVICE("PRODUCT") ARE PROVIDED ON AN "AS IS" AND 
                                     "AS AVAILABLE" BASIC. USE OF THE SERVICE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE AND THE PRODUCTS ARE
                                     PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                                     PURPOSE , OR NON-INFRINGEMENT , WITHOUT LIMITING THE FOREGOING, JAYPORE, ITS SUBSIDIARIES,AND ITS LICENSORS DO NOT WARRANT THAT THE 
                                     CONTENT IS IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOACATION, UNINTERRUPTED OR 
                                     SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICE IS FREE OR VIRUSES OR OTHER HARMFUL COMPONENTS, ANY
                                     CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SILELY RESPONSIBLE FOR 
                                     ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICE. 
                   
                                 </p>
                                 </div>
                                 <p className="termsAgreementsection">Limitation of liability </p>
                                 <div className="agreement-style">
                                 <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, JAYPORE ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY  </p>
                                 <div className="limitationofLiability" style={{marginLeft:30}}> 

                                 <p><span>(i)</span> ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AVAILABLE ON OR THROUGH THE SERVICE;</p>
                                 <p><span>(ii)</span> PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR
                                 SERVICE OR ANY PRODUCT;  </p>
                                 <p><span>(iii)</span> ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVICES AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN;</p>
                                 <p><span>(iv)</span> ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE;</p>
                                 <p><span>(v)</span> ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY;</p>
                                 <p><span>(vi)</span> USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY. </p>
                                 </div>
                                 <p> The Service is controlled and operated from its facilities in the United States. Jaypore makes no representations that the Service is appropriate 
                                     or available for use in other locations. Those who access or use the Service from other jurisdictions do so at their own violation
                                     and are entirely responsible for compliance with all applicable United States and loacal laws and regulations, inclusing but not limited to
                                     export and import regulations. You represent and warrant you are not located in a country embargoed by the United States or that has been designated by the United States government as a "terrorist-supporting" country, and that you are not a foreign person or entity blocked or denied 
                                     by the United States government or otherwise listed on any United States government list of prohibited or restricted parties. Unless otherwise explicitly stated, all materials found on the Service are solely directed to individuals,companies, or other entities located in the 
                                     United States.  
                                 </p>
                                 <p>This Agreement, and any rights and license granted hereunder, may not be transferred or assigned by you, but may be assigned by Jaypore without restriction.</p>
                                 
                               </div>
                               <p className="termsAgreementsection">Governing Law</p>
                                <p className="mediumprohibitedActivity">Arbitration</p>
                                <div className="agreement-style">
                                <p>Jaypore may provide notificaviations, whether such notifications are required by law or are for marketing or other business related 
                                    purposes, to you via email notice, written or hard copy notice, or through posting of such notice on our website, as determined by 
                                    Jaypore in our sole discretion. Jaypore reserves the right to determine the form and means of providing notification to our Users, provided that you may not opt
                                    out of certain means of notification as described in this Agreement and our Privacy pocily. Jaypore is not responsible for any automatic filtering you or
                                    your network provider may apply to email notifications we send to the email address you provide us. We recommend that you add <span><a href="mailto:hello@jaypore.com" className="jayporegmailcolor"> hello@jaypore.com</a></span> to your email address book to help ensure you receive email notifications from us.  
                                </p>
                                <p>This Agreement, together with any amendments and any additional agreements you may enter into with Jaypore in connection with the 
                                    Service, shall constitute the entire agreement between you and Jaypore concerning the Service. If any provision of this Agreement is deemed 
                                    invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect.
                                    <p>No waiver of any term of this agreement shall be deemed a further or continuing waiver of such term or any other term, and Jaypore's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.</p>
                                </p>
                                </div>
                             </div>
                            
                             
                            
                    </div>

                </div>
               
            </div>
            </div>
         
           
            <Footer />
            </React.Fragment>
        )
    }
}

export default Termcondition
