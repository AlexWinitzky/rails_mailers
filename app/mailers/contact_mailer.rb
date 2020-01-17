class ContactMailer < ApplicationMailer

  def contact_email
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @message = params[:message]
    mail(to: 'alex.winitzky@gmail.com', subject: @subject)
  end
end
