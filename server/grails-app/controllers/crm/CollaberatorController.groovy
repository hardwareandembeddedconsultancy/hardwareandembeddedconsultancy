package crm


import grails.rest.*
import grails.converters.*

class CollaberatorController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CollaberatorController() {
        super(Collaberator)
    }


    def index(Integer max) {
        params.max =  (params.max=="all") ? countResources():Math.min(max ?: 10, 100)
        Long currentpage = Math.ceil((((params.max  as Long) + (params.int("offset")?:0 as Long)) ?: 0)/(params.max  as Long)) ?:0
        Long pagecount = Math.ceil(countResources()/params.max  as Long) ?:0
        header("companyCount",countResources())
        header("companyPage",currentpage)
        header("companyPageCount",pagecount)
        header("max",params.max)
        header("offset", params.int("offset") ?: 0)
        header("sort",params.sort)
        header("order",params.order)
        respond listAllResources(params), model: ["companyCount": countResources()]
       }


}
