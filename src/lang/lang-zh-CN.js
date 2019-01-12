import zhLocale from 'iview/src/locale/lang/zh-CN'

const messages = Object.assign(zhLocale, {
  lang: '语言',
  langName: '简体中文',
  messages: {
    loginSuccess: '登录成功',
    loginFailed: '登录失败',
    loginInvalid: '用户名或密码错误',
    logoutConfirm: '确认退出当前系统吗？',
    requestFailed: '请求失败',
    failed403: '请求被拒绝，可能没有权限，请联系系统管理员',
    leavePage: '输入的数据将会丢失，确认关闭吗？',
    allPages: '所有页面',
    otherPages: '其他页面',
    saveSuccess: '保存成功',
    deleteSuccess: '删除成功',
    changedPassword: '您修改了密码，请重新登录',
    tableNoData: '没有查询到数据',
    tableDataCannotDel: '该条数据不允许删除',
    selectDataForDelete: '请选择需要删除的数据',
    deleteDataConfirm: '确定删除所选数据吗？'
  },
  pageTitle: {
    test: '测试',
    E404: '404',
    E500: '500',
    login: '登录',
    home: '首页',
    personalInformation: '个人信息维护',
    appConfig: '应用配置',
    authConfig: '权限配置',
    orgConfig: '机构配置',
    paramConfig: '运行参数配置',
    roleConfig: '角色配置',
    userConfig: '用户配置'
  },
  common: {
    exit: '退出'
  },
  dialog: {
    info: '提示信息',
    error: '错误信息',
    warning: '警告信息',
    success: '操作成功',
    confirm: '请确认'
  },
  home: {
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    personalInformation: '个人信息',
    logout: '退出登录',
    closeAll: '关闭所有',
    closeOther: '关闭其他'
  },
  errorPage: {
    message404: '页面找不到',
    description404: '众里寻他千百度 蓦然回首 那人却在灯火阑珊处',
    message500: '服务器出错了',
    buttons: {
      back: '返回',
      home: '主页'
    }
  },
  forms: {
    changePassword: '修改密码',
    pleaseEnter: '请输入',
    loginNo: '登录账号',
    password: '密码',
    rememberMe: '记住我',
    avatar: '头像',
    avatarUpload: '头像上传',
    name: '名称',
    value: '值',
    mobile: '手机号',
    describe: '描述',
    action: '操作',
    invalid: '无效',
    enabled: '启用',
    disabled: '禁用',
    notEmpty: '不能为空',
    width: '宽',
    height: '高',
    old: '旧',
    new: '新',
    confirmPassword: '确认密码',
    passwordNotEqual: '两次输入的密码不相等',
    buttons: {
      login: '登录',
      submit: '提交',
      search: '查询',
      edit: '编辑',
      update: '更新',
      save: '保存',
      delete: '删除',
      cancel: '取消',
      add: '新增',
      reset: '重置',
      upload: '上传',
      free: '自定义'
    }
  }
})

export default messages
