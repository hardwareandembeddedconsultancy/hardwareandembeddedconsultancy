package hardwareandembeddedconsultancy

import crm.Company
import crm.Position

class BootStrap {

    def init = { servletContext ->
        new Company(name: "Individual",email: "sales@example.com",mobile: "1234567890").save()
        new Position(name: "Collaberators").save()
    }
    def destroy = {
    }
}
