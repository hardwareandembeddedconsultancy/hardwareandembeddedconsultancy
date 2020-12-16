package crm


import grails.rest.*
import grails.converters.*

class CompanyController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CompanyController() {
        super(Company)

    }

    @Override
    def index(Integer max) {
        params.max = (params.max=="all") ? countResources():Math.min(max ?: 10, 100)
        Long currentpage = Math.ceil((((params.max  as Long) + (params.int("offset")?:0 as Long)) ?: 0)/(params.max  as Long)) ?:0
        Long pagecount = Math.ceil(countResources()/params.max  as Long) ?:0

        return [
                companyList : listAllResources(params),
                companyCount: countResources(),
                companyPage:currentpage,
                companyPageCount:pagecount,
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
