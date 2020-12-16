package crm

class Employee {
    String avatar
    String firstName
    String lastName
    String email
    String mobile
    Date dob
    Date joiningdate
    Date relievingdate
    Date dateCreated
    Date lastUpdated

    static constraints = {
        avatar nullable:true, blank:true
        firstName matches: "[a-zA-Z ]+"
        lastName matches: "[a-zA-Z ]+"
        email unique:true,email: true
        relievingdate nullable:true, blank:true
    }
}
