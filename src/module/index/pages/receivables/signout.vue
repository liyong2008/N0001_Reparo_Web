<template>
  <div id="signout" class="signout">
    <el-breadcrumb separator=">" class="bread">
      <svg class="icon combinedShape" aria-hidden="true">   <use xlink:href="#icon-locate"></use> </svg>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签发</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>    <!--slot="header" class="clearfix"-->
        <span class="sellerStepTitle"><span class="sellerCircle">1</span>请填写订单详情</span>
      </div>
      <el-row class="dataTable">
        <el-row class="el-row-header">
          <el-col :span="6" style="margin-left: 19px;">订单编号：{{orderDetail.txDetail.orderId}}</el-col>
          <el-col :span="6">发起时间：{{orderDetail.txDetail.operationRecordVoList[0].operateTime | timeTransfer}}</el-col>
        </el-row>
        <el-row class="el-row-content" >
          <el-row class="el-row-content">
            <el-col :span="6" style="margin-left: 19px;">购买人：{{orderDetail.txDetail.payerCompanyName}}</el-col>
            <el-col :span="6">订单金额：{{orderDetail.txDetail.productTotalPrice}}</el-col>
            <el-col :span="6">付款方式：应收账款支付</el-col>
          </el-row>
          <el-row class="el-row-content">
            <el-col :span="6"  style="margin-left: 19px;">货品名称：{{orderDetail.txDetail.productName}}</el-col>
            <el-col :span="6" >货品数量：{{orderDetail.txDetail.productQuantity}}</el-col>
            <el-col :span="6">仓储机构：{{orderDetail.txDetail.payerRepo}}</el-col>
          </el-row>
          <el-row class="el-row-content">
            <el-col :span="6" style="margin-left: 19px;">仓单编号：{{orderDetail.txDetail.payeeRepoCertNo}}</el-col>
            <el-col :span="6">支付银行：{{orderDetail.txDetail.payerBank}}</el-col>
            <el-col :span="6">付款账户：{{orderDetail.txDetail.payerAccount}}</el-col>
          </el-row>
        </el-row>
      </el-row>
      <div>
        <span class="sellerStepTitle"><span class="sellerCircle">2</span>请填写应收账款信息</span>
      </div>
      <el-card class="signoutMsg">
        <el-form  :model="signoutInfo" :rules="signoutRules" ref="signoutInfo">
          <el-row>
            <el-col :span="8">
              <el-form-item label="账款金额" prop="isseAmt">
                <el-input v-model="signoutInfo.isseAmt">{{signoutInfo.isseAmt}}</el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="账款到期日" prop="dueDt">
                <el-date-picker
                  v-model="signoutInfo.dueDt"
                  type="date"
                  placeholder=""
                  :picker-options="pickerOptions">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="带息利率(%)" prop="rate">
                <el-input v-model="signoutInfo.rate">{{signoutInfo.rate}}</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="付款人名称" prop="pyerName">
                <el-input v-model="signoutInfo.pyerName" :disabled="true">{{signoutInfo.pyerName}}</el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="付款人开户行" prop="pyerBank">
                <el-input v-model="signoutInfo.pyerBank" :disabled="true">{{signoutInfo.pyerBank}}</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16" class="pyer">
              <el-form-item label="付款人账户" prop="pyer">
                <el-input v-model="signoutInfo.pyer" :disabled="true">{{signoutInfo.pyer}}</el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="收款人名称" prop="pyeeName" >
                <el-input v-model="signoutInfo.pyeeName" :disabled="true">{{signoutInfo.pyeeName}}</el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收款人开户行" prop="pyeeBank" :disabled="true">
                <el-select v-model="signoutInfo.pyeeBank" name="农业银行" placeholder="">
                  <el-option :label="signoutInfo.pyeeBank" :value="signoutInfo.pyeeBank">{{signoutInfo.pyeeBank}}</el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16" class="pyee" >
              <el-form-item label="收款人账户" prop="pyee">
                <el-select v-model="signoutInfo.pyee" name="1" placeholder="">
                  <el-option :label="signoutInfo.pyee" :value="signoutInfo.pyee"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="合同编号" prop="contractNo">
                <el-input v-model="signoutInfo.contractNo">{{signoutInfo.contractNo}}</el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发票号" prop="invoiceNo">
                <el-input v-model="signoutInfo.invoiceNo">{{signoutInfo.invoiceNo}}</el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :span="12">
            <el-button type="primary" @click="signout('signoutInfo')">确认签发</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-card>
  </div>
</template>
<script>
  import Store from '../../vuex/store'
  import LocalStore from '../../../../common/store'
  import constantData from '../../../../common/const'

  export default {
    name:'signout',
    mounted:function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      var userInfo = LocalStore.fetchUserInfo();
      this.signoutInfo.pyeeBank = userInfo.acctSvcrName
      this.signoutInfo.pyee = userInfo.acctIds
      this.getOrderDetail()
    },
    data () {
      var validatePass = (rule,value,callback)=>{
        var reg = /^\d+(?:\.\d{1,2})?$/;
        console.log(value);
        if(!reg.test(value)){
          callback(new Error("请输入正确的带息利率"));
        }else if(value>100){
          callback(new Error("请输入正确的带息利率"));
        }else{
          callback();
        }
      };
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        orderDetail:{
          txDetail:{
            orderId:'',
            payerAccount:'',
            productTotalPrice:'',
            productName:'',
            productQuantity:'',
            payerRepo:'',
            payeeRepoCertNo:'',
            payerBank:'',
            payerAccount:'',
            operationRecordVoList:[{}]
          }
        },
        signoutInfo:{
          isseAmt:'',    //票面金额
          dueDt:'',      //到期日
          rate:'',       //带息利率
          contractNo:'', //合同编号
          invoiceNo:'',   //发票号
          pyerName:'',   //付款人名称
          pyeeName:'',   //收款人名称
          pyerBank:'',   //付款人开户行
          pyeeBank:'',    //收款人开户行
          pyer:'',       //付款人账号
          pyee:''       //收款人账号
        },
        options: [{
          value: '选项1',
          label: '农业银行（默认）'
        }, {
          value: '选项2',
          label: '工商银行'
        }, {
          value: '选项3',
          label: '兴业银行'
        }],
        signoutRules:{
          dueDt: [
            { type: 'date',required: true, message: '请选择账款到期日', trigger: 'blur' }
          ],
          rate: [
            { required: true, message: '请输入带息利率', trigger: 'blur' },
            {validator:validatePass, trigger:'blur'}
          ],
          pyeeBank: [
            { required: true, message: '请选择开户行', trigger: 'blur' }
          ],
          pyee:[
            { required: true, message: '请选择账户', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      signout(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = new Date(this.signoutInfo.dueDt);
            var signParam = {
              orderNo:this.orderDetail.txDetail.orderId,
              pyer:this.signoutInfo.pyer,
              pyee:this.signoutInfo.pyee,
              isseAmt:this.signoutInfo.isseAmt,
              dueDt:data.getTime(),
              rate:this.signoutInfo.rate,
              contractNo:this.signoutInfo.contractNo,
              invoiceNo:this.signoutInfo.invoiceNo
            };
            this.$http.post('../v1/receivable/sign',signParam,{emulateJSON:true}).then((res) => {
             if(res.body.code != 0){
                this.$message.error(res.body.message);
                return;
              }
              //跳到详情
              Store.commit('setCheckIdRece',res.body.data);
              this.$router.push('/allAccounts/signout/detail')
            },(err) => {
              console.log(err);
            })
          } else {
            return false;
          }
        },(err) => {
          console.log(err);
        })
      },
      getOrderDetail(){
          console.log("the state checkIdOrder is:" + Store.state.checkIdOrder);
          this.$http.get("../v1/order/detail?orderNo=" + Store.state.checkIdOrder).then(
            function (res) {
              if(res.body.code != 0){
                this.$message.error(res.body.message);
                return;
              }
              this.orderDetail = res.body.data;
              //将订单详情的值赋予签发表单
              this.signoutInfo.isseAmt = this.orderDetail.txDetail.productTotalPrice;
              this.signoutInfo.pyeeName = this.orderDetail.txDetail.payeeCompanyName;
              this.signoutInfo.pyer = this.orderDetail.txDetail.payerAccount;
              this.signoutInfo.pyerName = this.orderDetail.txDetail.payerCompanyName;
              this.signoutInfo.pyerBank = this.orderDetail.txDetail.payerBank;
            }, function (res) {
              console.log(res);
            }
          );
      }
    }
  }
</script>
