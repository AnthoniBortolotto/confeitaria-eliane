<script setup lang="ts">
import BaseText from '@/components/atoms/BaseText/BaseText.vue'
import BaseTitle from '@/components/atoms/BaseTitle/BaseTitle.vue'

defineOptions({
  name: 'AboutSection',
})
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-content">
        <BaseTitle :level="2" size="xl" color="primary" class="about-title">
          Sobre a Confeitaria Eliane
        </BaseTitle>

        <div class="about-text">
          <BaseText size="large" color="dark" class="about-paragraph">
            A Confeitaria Eliane vem adoçando a vida de nossos clientes com receitas tradicionais e
            inovações culinárias que fazem a diferença em cada mordida.
          </BaseText>

          <BaseText size="large" color="dark" class="about-paragraph">
            Nossa missão é transformar momentos especiais em memórias inesquecíveis através de bolos
            artesanais, doces finos e sobremesas que combinam sabor, qualidade e criatividade.
          </BaseText>

          <BaseText size="large" color="dark" class="about-paragraph">
            Utilizamos ingredientes selecionados e técnicas artesanais para criar produtos únicos
            que refletem o carinho e dedicação de nossa equipe apaixonada pela confeitaria.
          </BaseText>
        </div>

        <div class="about-features">
          <div class="feature">
            <div class="feature-icon">🎂</div>
            <BaseTitle :level="3" size="medium" color="secondary">Qualidade Premium</BaseTitle>
            <BaseText size="medium" color="dark"
              >Ingredientes selecionados e técnicas artesanais</BaseText
            >
          </div>

          <div class="feature">
            <div class="feature-icon">🌟</div>
            <BaseTitle :level="3" size="medium" color="secondary">Experiência Única</BaseTitle>
            <BaseText size="medium" color="dark"
              >Cada cliente recebe atenção personalizada e produtos feitos sob medida</BaseText
            >
          </div>

          <div class="feature">
            <div class="feature-icon">❤️</div>
            <BaseTitle :level="3" size="medium" color="secondary">Amor & Dedicação</BaseTitle>
            <BaseText size="medium" color="dark"
              >Cada produto é feito com carinho e atenção aos detalhes</BaseText
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  text-align: center;
}

.about-title {
  margin-bottom: 2rem;
  position: relative;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #e91e63, #ff9800);
  border-radius: 2px;
}

.about-text {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.about-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-weight: 400;
  letter-spacing: 0.2px;
}

.about-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.feature p {
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-section {
    padding: 2rem 0;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .feature {
    padding: 1.5rem;
  }
}
</style>
