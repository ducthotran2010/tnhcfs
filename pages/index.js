import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Header, Image, Advertisement, Segment, Icon, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/themes/default/assets/fonts/icons.eot'
import 'semantic-ui-css/themes/default/assets/fonts/icons.ttf'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff'
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2'
import '../static/heightscreen.css'

export default class extends Component {
   constructor(props) {
      super(props)
      this.state = { isLoading: true }
   }

   async componentDidMount () {
      // await new Promise((resolve) => {
      //    setTimeout(resolve, 300)
      // })
      this.setState({isLoading: false})
   }
   render() {
      var renderContent = () => {
         if (this.state.isLoading)
         return (
            <div data-reactchild>
               <Segment textAlign='center' vertical style={{height: '100%'}}>
                  <Icon loading  name='snowflake outline' size='huge' style={{marginTop: 'calc((100vh - 86px)/2)'}} />
               </Segment>
            </div>
         )
         else {
            return (
               <div data-reactchild className='parallax'>
                  <Segment textAlign='center' inverted vertical style={{height: '96%', margin:'0 0 3% 0', position: 'relative', background: 'url(./static/pic.jpg)'}} className='parallax__layer--back'>
                     <div><iframe title="Clock" src="https://freesecure.timeanddate.com/clock/i64jsry8/n218/szw200/szh200/hoc000/hbw3/cf100/hgr0/hwc000/hcw2/fav0/fiv0/mqc000/mqs3/mql25/mqw6/mqd96/mhc000/mhs3/mhl20/mhw6/mhd96/mmc000/mms3/mml10/mmw2/mmd96/hhs2/hhw6/hms2/hmw8/hmr4/hsc960/hss3/hsl90/hsw3" frameBorder="0" width="200" height="200"></iframe></div>
                     <div className='bottom'><Icon name='arrow down' size='big'></Icon></div>
                  </Segment>
                  <div className='parallax__layer parallax__layer--base'>
                     <div style={{height: '96%'}}>
                        <Link href="./content">
                           <Button size='big' primary icon labelPosition='right'>
                              NEXT
                              <Icon name='arrow circle right'></Icon>
                           </Button>
                        </Link>
                     </div>
                     <Grid>
                        <Grid.Column width={3} className='mobile hidden'></Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={10} style={{height:'1000px'}}>
                           <Segment>
                              <Header as='h1'>Giới thiệu</Header>
                              
                              <p>THPT chuyên Thoại Ngọc Hầu Confessions là một fanpage phi lợi nhuận chuyên đăng confessions với mục đích bày tỏ, thổ lộ những gì khó nói liên quan tới trường THPT chuyên Thoại Ngọc Hầu.</p>
                              <p>Để được đăng tải bài viết lên trang chủ bài viết cần đáp ứng các qui định sau đây:
                                 * Về hình thức: văn bản tiếng Việt có dấu, không teencode.
                                 * Về nội dung:
                                 - Không lợi dụng tính ẩn danh bôi nhọ danh dự, nhân phẩm cá nhân hay tập thể khác.
                                 - Không gửi bài viết có nội dung tục, liên quan 18+, thiếu văn hóa.
                                 - Không gửi bài viết có nội dung quá ngắn nhằm mục đích spam (VD m1r4cl3: Bạn A dễ thương quá, Bạn B đẹp gái ghê, Bình chọn hotboy hotgirl khối X,...).
                                 - Không gửi bài viết có thể gây ảnh hưởng xấu đến thầy cô, bạn bè.
                                 - Không gửi bài viết có thể gây mất đoàn kết trong nội bộ trường hoặc giữa trường ta với trường khác.
                              </p>
                              <p>+ Những confession mang tính chất GÂY WAR  hoặc QUÁ NGẮN( vd: Bạn XYZ lớp ABC đẹp quá cho mình xin info, mình say nắng bạn ABC rồi, ...) sẽ không được duyệt.
                                 + Các confessions về vấn đề học thêm hoặc xin sđt giáo viên dạy thêm sẽ không được duyệt.
                                 + Các vấn đề có liên quan đến nhà trường sẽ bị cấm hoặc các bạn có thể inbox cho trang "Bản tin online THPT chuyên Thoại Ngọc Hầu"
                                 + Không tiếp những bài tiếp thị sản phẩm. Những cfs quảng cáo sẽ không được duyệt.
                                 + Confessions mang tính đe dọa, đánh nhau sẽ bị loại trừ.
                                 Có thể chúng tôi làm việc còn có nhiều sai sót, đội ngũ admin luôn tiếp thu những ý kiến góp ý để page vững mạnh hơn. Đừng ngần ngại inbox trực tiếp page để góp ý nhé.</p>
                           </Segment>
                        </Grid.Column>

                     </Grid>
                  </div>
               </div>
            )
         }
      }
      return (
         <div data-reactroot>
            <Head/>
            { renderContent() }
         </div>
      )
   }
}
// <Header as='h1'>THPT chuyên Thoại Ngọc Hầu Confession</Header>
