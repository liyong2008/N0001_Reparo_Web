<template>
<div>
  <div>
    <el-breadcrumb separator=">" class="bread">
      <svg class="icon combinedShape" aria-hidden="true">   <use xlink:href="#icon-locate"></use> </svg>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我卖出的订单</el-breadcrumb-item>
      <el-breadcrumb-item>确认订单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-card class="confirmOrder">
    <div>
      <span class="sellerStepTitle"><span class="sellerCircle">1</span>请填写订单详情</span>
    </div>
    <el-row class="dataTable">
      <el-row class="el-row-header">
        <el-col :span="6" style="margin-left: 19px">订单编号：{{orderDetail.txDetail.orderId}}</el-col>
        <el-col :span="6">发起时间：{{orderDetail.txDetail.operationRecordVoList[0].operateTime | timeTransfer}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="msgName" style="margin-left: 19px">购买人：{{orderDetail.txDetail.payerCompanyName}}</el-col>
        <el-col :span="6" class="msgName">货品单价(元)：{{orderDetail.txDetail.productUnitPrice}}</el-col>
        <el-col :span="6" class="msgName">付款方式：{{orderDetail.txDetail.payingMethod | payingMethod}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="msgName" style="margin-left: 19px">货品名称：{{orderDetail.txDetail.productName}}</el-col>
        <el-col :span="6" class="msgName">货品数量：{{orderDetail.txDetail.productQuantity}}</el-col>
        <el-col :span="6" class="msgName">订单金额(元)：{{orderDetail.txDetail.productTotalPrice | numTransfer}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="msgName" style="margin-left: 19px">支付银行：{{orderDetail.txDetail.payerBank}}</el-col>
        <el-col :span="8" class="msgName">付款账户：{{orderDetail.txDetail.payerAccount}}</el-col>
      </el-row>
    </el-row>
    <div>
      <span class="sellerStepTitle"><span class="sellerCircle">2</span>请选择货品出库并确认订单</span>
    </div>
    <el-form :model="confirmOrder">
      <el-card style="width:100%;" class="confirmCard">
        <el-row>
          <el-col :span="8">
            <el-form-item label="出库货品所在仓储">
              <el-select v-model="confirmOrder.payeeRepoName" placeholder="请选择仓储">
                <template v-for="item in confirmOrder.repoList">
                  <el-option :label="item" :value="item"></el-option>
                </template>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="货品的仓单编号">
              <el-input v-model="confirmOrder.payeeRepoCertNo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-row>
        <el-col :span="24" style="text-align: left;margin-top: 10px">
          <el-button type="primary" @click="onSubmit">确认订单</el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-card>

  <!--自定义弹框-->
  <transition name="modal">
    <div class="modal-mask" v-show="showModal">
      <div class="modal-confirm">
        <el-row class="el-row-header">
          <span class="confirm-header sellerColor">确认订单</span><i class="el-icon-close closeBtn" @click="close" style="cursor: pointer"></i>
        </el-row>
        <div class="confirm-content">
          <el-form>
          <el-row>
            <el-col :span="12">
              <span style="font-size: 12px;margin-left: 4%;">订单编号：{{orderDetail.txDetail.orderId}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="购买人">
                <el-label>{{orderDetail.txDetail.payerCompanyName}}</el-label>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款方式">
                <el-label>{{orderDetail.txDetail.payingMethod | payingMethod}}</el-label>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="订单金额(元)">
                <el-label>{{orderDetail.txDetail.productTotalPrice | numTransfer}}</el-label>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="支付银行">
                <el-label>{{orderDetail.txDetail.payerBank}}</el-label>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="货品名称">
                <el-label>{{orderDetail.txDetail.productName}}</el-label>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款账户">
                <el-label>{{orderDetail.txDetail.payerAccount}}</el-label>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="货品数量">
                <el-label>{{orderDetail.txDetail.productQuantity}}</el-label>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单出库仓储">
                <el-label>{{confirmOrder.payeeRepoName}}</el-label>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="货品单价(元)">
                <el-label>{{orderDetail.txDetail.productUnitPrice}}</el-label>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单出库仓单编号">
                <el-label>{{confirmOrder.payeeRepoCertNo}}</el-label>
              </el-form-item>
            </el-col>
          </el-row>
          </el-form>
        </div>
        <el-row>
          <el-col :span="24">
            <div style="text-align: right;font-size: 12px;margin-right: 15px;margin-bottom: 10px">
              <svg class="icon" aria-hidden="true" style="color: #B4C3BF;margin-top: 5px">   <use xlink:href="#icon-jinggao"></use> </svg>
              <span style="color: #779B92">确认订单并进入签发账款页面</span>
            </div>
            <el-row>
              <el-button size="small" type="primary" @click="confirm">确定并签发账款</el-button>
            </el-row>
          </el-col>
        </el-row>
    </div>
    </div>
  </transition>
</div>
</template>
<script>
  import store from "../../vuex/store"
  export default {
    name: 'index',
    data () {
      return {
        orderDetail: {
          txDetail: {
            orderId:'',
            operationRecordVoList:[
              {
                operateTime:''
              }
            ],
            payerCompanyName:'',
            productUnitPrice:'',
            payingMethod:'',
            productName:'',
            productQuantity:'',
            productTotalPrice:'',
            payerBank:'',
            payerAccount:''
          },
          receDetail: {},
          repoDetail: {},
          wayBillDetail: {}
        },
        confirmOrder: {
          orderNo:'',
          payeeRepoName:'',
          payeeRepoCertNo:'',
          repoList:''
        },
        showModal:false,
      }
    },
    methods: {
      onSubmit () {
        this.showModal=true;
      },
      close(){
        this.showModal=false;
      },
      confirm () {
        this.showModal=false;
        console.log("订单确认");
         this.confirmOrder.orderNo=store.state.checkIdOrder;
         console.log(this.confirmOrder);
         this.$http.post("../v1/order/confirmation",this.confirmOrder,{emulateJSON:true}).then(
         function(res){
           if(res.body.code != 0){
             this.$message.error(res.body.message);
             return;
           }
           this.$router.push("/allAccounts/signout/signout");//跳转到签发应收账款
         },
         function(err){console.log(err)}
         );
      }
    },
    mounted () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
        this.$http.get("../v1/order/detail?orderNo="+store.state.checkIdOrder).then(
            function(res){
              if(res.body.code != 0){
                this.$message.error(res.body.message);
                return;
              }
              this.orderDetail=res.body.data;
              this.$http.get("../v1/account/allEnterpriseName?roleCode=2").then(function(res){
                if(res.body.code != 0){
                  this.$message.error(res.body.message);
                  return;
                }
                this.confirmOrder.repoList=res.body.data;
              },function(err){
                console.log(err)
              });
            },
          function(err){
            console.log(err);
          }
        );
    }
  }
</script>
<style>

</style>
