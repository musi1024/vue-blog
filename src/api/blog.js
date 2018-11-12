import request from '@/helpers/request'

const Url = {
    GetList: '/blog',
    GetDetail: '/blog/:blogId',
    Create: '/blog',
    Update: '/blog/:blogId',
    Delete: '/blog/:blogId'
}

export default {
    getAll({page=1, userId, atIndex} = {page: 1}) {
        return request(Url.GetList, 'GET', {page, userId, atIndex})
    },
    getIndex({ page=1 } = { page: 1}) {
        return this.getAll({ page, atIndex: true })
    },
    getByUserId(userId, { page=1, atIndex } = { page: 1}) {
        return this.getAll({ userId, page, atIndex })
    },
    getDetail({blogId}) {
        return request(Url.GetDetail.replace(':blogId', blogId))
    },
    create({ title = '', content = '', description = '', atIndex = false} = { title: '', content: '', description: '', atIndex: false}) {
        return request(Url.Create, 'POST', {title, content, description, atIndex})
    },
    update({blogId}, {title, content, description, atIndex}) {
        return request(Url.Update.replace(':blogId', blogId), 'PATCH', {title, content, description, atIndex})
    },
    delete({blogId}){
        return request(Url.Delete.replace(':blogId', blogId), 'DELETE')
    }
}