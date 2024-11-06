// test/series.test.js
const request = require('supertest');
const app = require('../index.js'); // Supondo que o arquivo principal seja app.js

describe('API de Séries', async () => {
  const { expect } = await import('chai');
  describe('GET /series', () => {
    it('deve retornar todas as séries', async () => {
      const res = await request(app)
        .get('/series')
        .expect(200);

      expect(res.body).to.be.an('array');
    });
  });

  describe('POST /series', () => {
    it('deve adicionar uma nova série', async () => {
      const novaSerie = { codigo: 3, nome: 'Série Teste' };
      const res = await request(app)
        .post('/series')
        .send(novaSerie)
        .expect(200);

      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('objeto');
      expect(res.body.objeto).to.have.property('codigo', novaSerie.codigo);
      expect(res.body.objeto).to.have.property('nome', novaSerie.nome);
    });
  });

  describe('GET /series/:codigo', () => {
    it('deve retornar uma série específica pelo código', async () => {
      const res = await request(app)
        .get('/series/3')
        .expect(200);

      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('codigo', 3);
    });
  });

  describe('PUT /series/:codigo', () => {
    it('deve atualizar uma série existente', async () => {
      const atualizacaoSerie = { codigo: 3, nome: 'Série Atualizada' };
      const res = await request(app)
        .put('/series/3')
        .send(atualizacaoSerie)
        .expect(200);

      expect(res.body).to.have.property('status', 'success');
      expect(res.body.objeto).to.have.property('nome', atualizacaoSerie.nome);
    });
  });

  describe('DELETE /series/:codigo', () => {
    it('deve deletar uma série pelo código', async () => {
      const res = await request(app)
        .delete('/series/3')
        .expect(200);

      expect(res.body).to.have.property('status', 'success');
      expect(res.body).to.have.property('message');
    });
  });
});
