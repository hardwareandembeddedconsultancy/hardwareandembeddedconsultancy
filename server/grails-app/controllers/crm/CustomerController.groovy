package crm


import grails.rest.*
import grails.converters.*

class CustomerController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CustomerController() {
        super(Customer)
    }

    @Override
    def index(Integer max) {
        params.max = (params.max=="all") ? countResources():Math.min(max ?: 10, 100)
        Long currentpage = Math.ceil((((params.max  as Long) + (params.int("offset")?:0 as Long)) ?: 0)/(params.max  as Long)) ?:0
        Long pagecount = Math.ceil(countResources()/params.max  as Long) ?:0

        return [
                customerList : listAllResources(params),
                customerCount: countResources(),
                customerPage:currentpage,
                customerPageCount:pagecount,
                max         : params.max ,
                offset      : params.int("offset") ?: 0,
                sort        : params.sort,
                order       : params.order
        ]
    }

    @Override
    boolean getReadOnly() {
        return true
    }
}
