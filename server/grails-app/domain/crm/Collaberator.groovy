package crm

class Collaberator {

    String avatar
    Company company
    String firstName
    String lastName
    Date dob
    Position position
    String note
    String mobile
    String email
    Date dateCreated
    Date lastUpdated

    static constraints = {

        avatar nullable:true, blank:true
        firstName matches: "[a-zA-Z ]+"
        lastName matches: "[a-zA-Z ]+"
        note nullable:true,blank:true
        email unique:true,email: true
        mobile  unique:true,minSize:10,maxSize: 11,matches:"^[0-9]+",nullable:true,blank:true

    }

}
