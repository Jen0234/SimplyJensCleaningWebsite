 const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    const runCounter = (counter) => {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      let current = 0;
      const increment = target / 60;

      const update = () => {
        current += increment;

        if (current < target) {
          counter.textContent = Math.ceil(current) + suffix;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + suffix;
        }
      };

      update();
    };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
          entry.target.classList.add("counted");
          runCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

};
