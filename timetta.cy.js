describe('Login for Timetta', () => {
    it('Login for Timetta', () => {

    // Авторизуемся
    cy.request({
      method: 'POST',
      // Endpoint авторизации
      url: 'https://auth.timetta.com/connect/token',
      form: true,
      body: {
        // Тестовая учётка
        username: 'FadeevP@test-task.ru',
        password: 'MkO1qC',
        // Авторизуемся через grant type "password"
        grant_type: 'password',
        // Заправшиваем доступ ко всем необходимым скоупам
        scope: 'all offline_access',
        client_id: 'external',
      },
    }).then((res) => {

        // получаем сессию с авторизационным токеном.

        cy.request({
          method: 'GET',
          url: 'https://api.timetta.com/odata/GetSession',
          headers: {
              Authorization: "Bearer " + res.body.access_token
          }
      }).then((res) => {
            cy.wrap(res.body.user).its('name').should('eq', 'Петр Фадеев');
        })
    });
  });
});
