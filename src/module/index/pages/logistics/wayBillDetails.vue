<template>
  <div>
    <el-breadcrumb separator=">" class="bread">
      <svg class="icon combinedShape" aria-hidden="true">   <use xlink:href="#icon-locate"></use> </svg>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>物流管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/logistics/myWaybill'}">我的物流</el-breadcrumb-item>
      <el-breadcrumb-item>物流详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row class="el-row-header statePosition">
        <el-col class="sellerColor stateShow ">
          <svg class="icon detailIcon" aria-hidden="true">   <use xlink:href="#icon-zhuangtai"></use> </svg>物流当前状态：{{logisticsDetail.waybillStatusCode | wayBillStatus}}
          &nbsp;<el-button style="color: rgb(57,202,166);border-color:rgb(57,202,166) " size="small" v-if="logisticsDetail.waybillStatusCode===constantData.FORSEND" @click="sendGood(logisticsDetail.orderNo)">申请发货</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card mybox" style="width:100%">
            <div slot="header" class="clearfix el-row-header">
              <svg class="icon detailIcon" aria-hidden="true">   <use xlink:href="#icon-wl_H"></use> </svg>
              <span class="keynote">物流信息</span>
            </div>
            <div class="box-card mycard1 detailContent">
              <el-row>
                <el-col :span="6" class="msgName keynote">运单号：{{logisticsDetail.wayBillNo | nullSituation}}</el-col>
                <el-col :span="6" class="msgName">物流公司：{{logisticsDetail.logisticsEnterpriseName | nullSituation}}</el-col>
                <el-col :span="6" class="msgName">发货申请时间：{{logisticsDetail.sendReqTime | timeTransfer | nullSituation}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="msgName">物流跟踪：</el-col>
              </el-row>

              <el-row class="collapseTop" v-if="logisticsDetail.operationRecordVo.length!=0">
                <template v-for="(item,index) in logisticsDetail.operationRecordVo">
                  <el-row class="status-list" :class="{circleColor:index==(logisticsDetail.operationRecordVo.length-1)}">
                    <el-col :span="6" :class="{circleColor1:index==(logisticsDetail.operationRecordVo.length-1)}"><span>{{item.operateTime | timeTransfer}} {{item.state | wayBillStatus}}</span></el-col>
                  </el-row>
                </template>
              </el-row>
              <el-row class="msgName" v-else>
                  暂无
              </el-row>

            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card mybox" style="width:100%">
            <div slot="header" class="clearfix el-row-header">
              <svg class="icon detailIcon" aria-hidden="true">   <use xlink:href="#icon-qita"></use> </svg>
              <span class="keynote">其他信息</span>
            </div>
            <div class="box-card mycard1 detailContent ">
              <el-row class="msgName keynote">发货信息：</el-row>
              <el-row class="cutoff">
                <el-col :span="6" class="msgName">运单号：{{logisticsDetail.wayBillNo | nullSituation}}</el-col>
                <el-col :span="6" class="msgName">发货仓储：{{logisticsDetail.senderRepoEnterpriseName}}</el-col>
                <el-col :span="8" class="msgName">货品仓单编号：{{logisticsDetail.senderRepoCertNo}}</el-col>
              </el-row>
              <el-row class="msgName keynote" style="margin-top: 10px">收货信息：</el-row>
              <el-row class="cutoff">
                <el-col :span="6" class="msgName">收货人：{{logisticsDetail.receiverEnterpriseName}}</el-col>
                <el-col :span="6" class="msgName">收货仓储：{{logisticsDetail.receiverRepoEnterpriseName}}</el-col>
              </el-row>
              <el-row class="msgName keynote" style="margin-top: 10px">货品信息：</el-row>
              <el-row>
                <el-col :span="6" class="msgName">货品名称：{{logisticsDetail.productName}}</el-col>
                <el-col :span="6" class="msgName">货品数量：{{logisticsDetail.productQuantity}}</el-col>
                <el-col :span="6" class="msgName">货品单价(元)：{{(logisticsDetail.productQuantity===''||logisticsDetail.productQuantity===0)?0.00:(logisticsDetail.productValue/logisticsDetail.productQuantity | numTransfer)}}</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>

</template>
<script>
  import store from '../../vuex/store'
  import constantData from '../../../../common/const'
  export default {
    name:'index',
    data () {
      return {
          logisticsDetail:{
            inRepoTime:'',
            productQuantity:'',
            operationRecordVo:[],
            sendReqTime:''//卖家申请发货时间，待筛选
          }
      }
    },
    computed:{
      constantData () {
          return constantData;
      }
    },
    methods:{
        sendGood (checkId) {
            store.commit('setCheckIdOrder',checkId);
            this.$router.push("/logistics/deliver");
        }
    },
    mounted () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
//        请求物流详情接口　
        this.$http.get("../v1/waybill/wayBillDetail?orderNo="+store.state.checkIdOrder).then(function(res){
          if(res.body.code != 0){
            this.$message.error(res.body.message);
            return;
          }
          this.logisticsDetail=res.body.data;
          this.logisticsDetail.sendReqTime='';
          for(var item in this.logisticsDetail.operationRecordVo){
              var temp=this.logisticsDetail.operationRecordVo[item];
            if(temp.state===constantData.SENDFORRESPONSE){/*筛选申请发货时间，即发货待响应时间*/
              this.logisticsDetail.sendReqTime=temp.operateTime;
              break;
            }
          }
        },function(err) {
            console.log(err);
        });
    }
  }
</script>

