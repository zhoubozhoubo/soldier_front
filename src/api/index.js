import request from '@/utils/request'

export function getBanner(params) {
  return request({
    url: '/api/Banner/getAll',
    method: 'get',
    params
    //banner_type banner类型(1政策解读,2军人风采,3法律援助,4心理咨询)
  })
}
export function getHelpSpot(params) {
  return request({
    url: '/api/HelpSpot/getAll',
    method: 'get',
    params
    //spot_type 1法律援助 2心理咨询
  })
}

export function getActivityType(params) {
  return request({
    url: '/api/ActivityType/getPage',
    method: 'get',
    params
    //page=1
    //size=10
  })
}
export function getActivityDetail(params) {
  return request({
    url: 'api/ActivityType/getDetails',
    method: 'get',
    params
    //id=
  })
}
export function getResource(params) {
  return request({
    url: 'api/ActivityResource/getPage',
    method: 'get',
    params
    //activity_type_id 1视频 2图片
    //page=1
    //size=10
  })
}
export function getConsult(params) {
  return request({
    url: 'api/Consult/getPage',
    method: 'get',
    params
    //page=1
    //size=10
  })
}

export function getSoldier(params) {
  return request({
    url: 'api/Soldier/getPage',
    method: 'get',
    params
    //page=1
    //size=10
  })
}

export function getSoldierDetail(params) {
  return request({
    url: 'api/Soldier/getDetails',
    method: 'get',
    params
    //page=1
    //size=10
  })
}

export function getPolicy(params) {
  return request({
    url: 'api/Policy/getPage',
    method: 'get',
    params
    //policy_type
    //page=1
    //size=10
  })
}
