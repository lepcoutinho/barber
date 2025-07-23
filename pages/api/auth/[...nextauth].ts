import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '1072129724458-a7ol8ub5haf95tk0dojfmomujad3q3o0.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // Adicione outros provedores aqui, se necessário
  ],


});