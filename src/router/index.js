import Vue from 'vue'
import Router from 'vue-router'

// // 用户
import UUser from './../components/User/UUser'
import UserNotice from './../components/User/Notice'

import HelloWorld from './../components/HelloWorld'
import PersonalInformation from './../components/base/PersonalInformation'
import InformationCenter from './../components/InformationCenter'
import Role from './../components/Role'
import User from './../components/User'
import Permission from './../components/Permission'
import PPermission from './../components/PPermission'
import MMessage from './../components/MMessage'
import NNotice from './../components/NNotice'
import Organization from './../components/Organization'
import Course from './../components/Course'
import Teaching from './../components/Teaching'
import Question from './../components/Question'
import ExaminationPaper from './../components/ExaminationPaper'
import Chapter from './../components/Chapter'
import Test from './../components/Test'
import ApplyFor from './../components/ApplyFor'
import Label from './../components/label'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/he',
      name: 'Hello',
      component: HelloWorld
    },
    // 【用户】
    {
      path: '/uuser',
      name: '用户',
      component: UUser
    },
    {
      path: '/user-notice',
      name: '用户-全部消息',
      component: UserNotice
    },

    //
    {
      path: '/personal-information',
      name: '个人信息',
      component: PersonalInformation
    },
    {
      path: '/information-center',
      name: '消息中心',
      component: InformationCenter
    },
    // 【角色】
    {
      path: '/role',
      name: '角色-角色',
      component: Role
    },
    {
      path: '/user',
      name: '角色-用户',
      component: User
    },
    {
      path: '/permission',
      name: '角色权限',
      component: Permission
    },
    // 权限
    {
      path: '/ppermission',
      name: '权限',
      component: PPermission
    },
    // 消息
    {
      path: '/mmessage',
      name: '消息',
      component: MMessage
    },
    // 通知
    {
      path: '/nnotice',
      name: '通知',
      component: NNotice
    },
    // 组织
    {
      path: '/organization',
      name: '组织',
      component: Organization
    },
    // 课程
    {
      path: '/course',
      name: '课程',
      component: Course
    },
    {
      path: '/teaching',
      name: '授课',
      component: Teaching
    },
    // 问题
    {
      path: '/question',
      name: '问题',
      component: Question
    },
    // 试卷
    {
      path: '/examination-paper',
      name: '试卷',
      component: ExaminationPaper
    },
    {
      path: '/chapter',
      name: '章节',
      component: Chapter
    },
    {
      path: '/test',
      name: '考试',
      component: Test
    },
    // 申请
    {
      path: '/apply-for',
      name: '申请',
      component: ApplyFor
    },
    // 标签
    {
      path: '/label',
      name: '标签',
      component: Label
    },
  ]
})
