package crm

class Customer {

    String name
    String email
    String mobile
    String address
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name matches: "[a-zA-Z ]+"
        email unique:true,email:true,nullable:true,blank:true
        mobile  unique:true,minSize:10,maxSize: 11,matches:"^[0-9]+"
        address nullable:true,blank:true
    }
}
