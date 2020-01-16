class ContactMailer < ApplicationMailer
  # default from: 'contact@peppercorn.com'

  def contact_email
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @message = params[:message]
    # @url = 'http://localhost:3000/contact'
    @url = 'https://www.gmail.com'
    mail(to: 'alex.winitzky@gmail.com', from: 'contact@peppercorn.com', subject: @subject)
  end
end
