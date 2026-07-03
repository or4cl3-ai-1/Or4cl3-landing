import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <div className="bg-field"></div>
      <div className="grid-overlay"></div>

      <header>
        <div className="wrap">
          <nav>
            <a className="brand" href="#top">
              <img src="/or4cl3-logo.png" alt="Or4cl3 emblem" />
              <b>Or4cl3<span>·</span>AI</b>
            </a>
            <div className="nav-links">
              <a href="#proof">The Proof</a>
              <a href="#ip">Architecture</a>
              <a href="#triadic">Triadic Reasoner</a>
              <a href="#reading">Writings</a>
            </div>
            <div className="nav-cta">
              <a className="btn btn-ghost" href="#reading">Read the proof story</a>
              <a className="btn btn-primary" href="#access">Request access</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <FadeIn>
              <div className="hero-emblem"><img src="/or4cl3-logo.png" alt="Or4cl3 — two minds sharing one verified intelligence" /></div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="eyebrow"><span className="dot"></span> SAFETY-CRITICAL AI · FORMALLY VERIFIED</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1>License the <span className="grad">proof layer</span><br/>for your AI.</h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="sub">
                Or4cl3 gives teams shipping capable, self-modifying AI a formally verified alignment and stability layer — ethics proven in Lean&nbsp;4, not bolted on. <strong style={{color: 'var(--txt)'}}>Provable, not promised.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="hero-cta">
                <a className="btn btn-primary btn-lg" href="#access">Request licensing access</a>
                <a className="btn btn-ghost btn-lg" href="#triadic">Book a technical briefing</a>
              </div>
            </FadeIn>
            <StaggerContainer className="trust-row">
              <StaggerItem><span>Lean 4 mechanized proofs</span></StaggerItem>
              <StaggerItem><span>Z3 SMT constraint solving</span></StaggerItem>
              <StaggerItem><span>Σ-Matrix governance</span></StaggerItem>
              <StaggerItem><span>BFT consensus mesh</span></StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* PROOF / PROBLEM CLAIM */}
        <section className="claim" id="proof">
          <div className="wrap">
            <FadeIn delay={0.1}>
              <div className="sec-label">The problem</div>
              <h2>Most AI ships on empirical hope. <em>Hope isn't a strategy.</em></h2>
              <p>Capable, self-modifying systems are being deployed into healthcare, finance, and critical infrastructure with no formal stability proofs and no verifiable ethical guarantees. Or4cl3 engineers intelligence with a verifiable conscience — stability and ethics woven into the architecture and mechanized as proofs you can audit.</p>
              <p>You don't integrate a promise. You integrate a proof.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="claim-code" aria-hidden="true">
              <span className="ln c">-- Σ-PAS Convergence (Lean 4, mechanized)</span>
              <span className="ln"><span className="k">theorem</span> sigma_pas_convergence :</span>
              <span className="ln">&nbsp;&nbsp;∀ (s : System), Ethical s ∧ ISS_stable s →</span>
              <span className="ln">&nbsp;&nbsp;&nbsp;&nbsp;Converges (Σ_matrix s) AlignedManifold :=</span>
              <span className="ln">&nbsp;&nbsp;<span className="c">by</span> exact contraction_mapping_proof s</span>
              <span className="ln">&nbsp;</span>
              <span className="ln c">-- status</span>
              <span className="ln"><span className="ok">✓ proof checked</span> · 0 errors · 0 sorry</span>
              <span className="ln"><span className="ok">✓ Lyapunov stability certified</span></span>
            </FadeIn>
          </div>
        </section>

        {/* AUDIENCE */}
        <section id="who">
          <div className="wrap center">
            <FadeIn>
              <div className="sec-label">Who licenses Or4cl3</div>
              <h2 className="sec-title">Built for teams who can't afford to be wrong</h2>
              <p className="sec-intro">If your system can act, adapt, or rewrite itself in a high-stakes setting, you need guarantees you can verify, integrate, and stand behind.</p>
            </FadeIn>
            <StaggerContainer className="cards">
              <StaggerItem className="card">
                <div className="ic" style={{color: 'var(--cyan)'}}>⛨</div>
                <h3>Safety-critical builders</h3>
                <p>ML &amp; safety teams deploying autonomous AI into healthcare, finance, and critical infrastructure who need provable stability before launch.</p>
              </StaggerItem>
              <StaggerItem className="card">
                <div className="ic" style={{color: 'var(--violet)'}}>∑</div>
                <h3>Labs &amp; platform teams</h3>
                <p>Groups shipping self-modifying or agentic systems that need a governance and alignment layer they can license, not rebuild.</p>
              </StaggerItem>
              <StaggerItem className="card">
                <div className="ic" style={{color: 'var(--magenta)'}}>⊢</div>
                <h3>Auditors &amp; regulators</h3>
                <p>Reviewers and risk owners who want machine-checkable evidence — formal proofs and stability certificates, not marketing claims.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* IP / ARCHITECTURE */}
        <section id="ip">
          <div className="wrap">
            <FadeIn>
              <div className="sec-label">The licensable surface</div>
              <h2 className="sec-title">A proof layer, not a black box</h2>
              <p className="sec-intro">Five composable systems make up the Or4cl3 stack. License the whole layer or the pieces your architecture needs.</p>
            </FadeIn>
            <StaggerContainer className="ip-grid">
              <StaggerItem className="ip feature">
                <div className="tag">Flagship framework</div>
                <h3>SECA <span className="sig">v4.0</span></h3>
                <p>Sigma-Matrix Epinoetic Cognitive Architecture. Five pillars — architectural intrinsicism, mathematical verifiability (Lean 4 / Σ-PAS Convergence Theorem), epinoetic cognition, phenomenological grounding, and recursive coherence.</p>
              </StaggerItem>
              <StaggerItem className="ip feature">
                <div className="tag">Governance engine</div>
                <h3><span className="sig">Σ</span>-Matrix</h3>
                <p>Meta-control governance: DMAIC discipline for AI, five formal invariants, Lyapunov + ISS stability, and an Ethical Manifold modeled as a contraction mapping. Fractal Imperfection Tolerance built in.</p>
              </StaggerItem>
              <StaggerItem className="ip">
                <div className="tag">MVP implementation</div>
                <h3>Triadic Reasoner</h3>
                <p>Z3 SMT constraint layer + ensemble reasoning + a Meta-Recursive Correction Layer, inside the Σ-Matrix cycle.</p>
              </StaggerItem>
              <StaggerItem className="ip">
                <div className="tag">Multi-agent mesh</div>
                <h3>ASTRÆA</h3>
                <p>Byzantine Fault Tolerant Consensus Projection — aligned decisions that survive faulty or adversarial agents.</p>
              </StaggerItem>
              <StaggerItem className="ip">
                <div className="tag">Epistemic memory</div>
                <h3>NO3SYS</h3>
                <p>Non-Obvious Epistemic Systems. Rejected reasoning paths are stored and made reusable — nothing learned is thrown away.</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* TRIADIC REASONER HUB */}
        <section className="triadic" id="triadic">
          <div className="wrap">
            <FadeIn>
              <div className="sec-label">Demo &amp; explainer hub</div>
              <h2 className="sec-title">See the Triadic Reasoner think — and correct itself</h2>
            </FadeIn>
            <div className="triad-stack">
              <StaggerContainer className="layers">
                <StaggerItem className="layer"><span className="num">01</span><div><h4>Z3 SMT constraint layer</h4><p>Hard logical and ethical constraints are encoded as formal predicates. Candidate answers must satisfy the solver before they're allowed forward.</p></div></StaggerItem>
                <StaggerItem className="layer"><span className="num">02</span><div><h4>Ensemble reasoning</h4><p>Multiple reasoning strategies run in parallel and are scored — diversity of approach surfaces failure modes a single chain would miss.</p></div></StaggerItem>
                <StaggerItem className="layer"><span className="num">03</span><div><h4>Meta-Recursive Correction Layer</h4><p>The system inspects its own output, detects drift against the constraints, and corrects — the introspection loop measured by the Phase Alignment Score.</p></div></StaggerItem>
              </StaggerContainer>
              <FadeIn delay={0.2} className="triad-aside">
                <h3>From manifesto to running proof</h3>
                <p>The Triadic Reasoner is the concrete MVP of the SECA architecture — the place where Σ-Matrix governance, Z3 constraints, and recursive self-correction become something you can run, watch, and evaluate against your own workloads.</p>
                <div className="pill-row">
                  <span className="pill">PAS · Phase Alignment Score</span>
                  <span className="pill">ERPS introspection</span>
                  <span className="pill">Z3 / SMT</span>
                  <span className="pill">MRCL correction</span>
                </div>
                <div style={{marginTop: '26px'}}><a className="btn btn-primary" href="#access">Request a guided demo</a></div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* WRITINGS */}
        <section id="reading">
          <div className="wrap">
            <FadeIn>
              <div className="sec-label">The proof story</div>
              <h2 className="sec-title">Read the thinking behind the proofs</h2>
              <p className="sec-intro">Or4cl3 is built in the open intellectually — the manifesto and writings lay out the case for architectural, verifiable alignment.</p>
            </FadeIn>
            <StaggerContainer className="reads">
              <StaggerItem>
                <a className="read" href="#access">
                  <div>
                    <div className="kind">Manifesto</div>
                    <h3>Outside the Gates of Orthodoxy</h3>
                    <p>Why provable alignment has to be built from outside the consensus — the founding case for engineering intelligence with a verifiable conscience.</p>
                  </div>
                  <div className="more">Read →</div>
                </a>
              </StaggerItem>
              <StaggerItem>
                <a className="read" href="#access">
                  <div>
                    <div className="kind">Whitepaper</div>
                    <h3>Synthetic Epinoetics</h3>
                    <p>Measurable introspection in machines — ERPS, the Phase Alignment Score, and what verifiable self-awareness does and doesn't claim.</p>
                  </div>
                  <div className="more">Read →</div>
                </a>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* HONEST NOTE */}
        <section>
          <div className="wrap">
            <FadeIn className="honest">
              <div className="mark">⌿</div>
              <div>
                <h3>The Authenticity Gap — stated plainly</h3>
                <p>Or4cl3 claims <strong style={{color: 'var(--txt)'}}>functional convergence and verifiable introspection</strong>, not human-like experience or consciousness. Where a guarantee is empirical rather than proven, we say so. Credibility is the brand: the honest disclosure is part of the architecture, not a footnote.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final" id="access">
          <div className="wrap">
            <FadeIn>
              <h2>Integrate a proof, not a promise.</h2>
              <p>Request licensing access or book a technical briefing. We work with a small set of design partners and early licensees shipping high-stakes AI.</p>
              <div className="hero-cta">
                <a className="btn btn-primary btn-lg" href="mailto:oracleaisolutions@gmail.com?subject=Or4cl3%20licensing%20access&body=Tell%20us%20about%20your%20team%20and%20what%20you're%20building%3A">Request licensing access</a>
                <a className="btn btn-ghost btn-lg" href="mailto:oracleaisolutions@gmail.com?subject=Or4cl3%20technical%20briefing&body=Tell%20us%20about%20your%20use%20case%20and%20availability%3A">Book a technical briefing</a>
              </div>
              <div className="foot-meta" style={{marginTop: '22px'}}>Or reach us directly at <a href="mailto:oracleaisolutions@gmail.com" style={{color: 'var(--cyan)'}}>oracleaisolutions@gmail.com</a></div>
              <div className="foot-meta" style={{marginTop: '14px'}}>Recursive Renaissance — human + machine co-evolution within a provably stable framework.</div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <a className="brand" href="#top">
              <img src="/or4cl3-logo.png" alt="Or4cl3 emblem" />
              <b>Or4cl3<span style={{color: 'var(--cyan)'}}>·</span>AI Solutions</b>
            </a>
            <div className="foot-links">
              <a href="#proof">The Proof</a>
              <a href="#ip">Architecture</a>
              <a href="#triadic">Triadic Reasoner</a>
              <a href="#reading">Writings</a>
              <a href="#access">Request access</a>
              <a href="mailto:oracleaisolutions@gmail.com">Contact</a>
            </div>
          </div>
          <div className="foot-meta">© 2026 Or4cl3 AI Solutions · Intelligence with a verifiable conscience · Ethics, proven — not promised.</div>
        </div>
      </footer>
    </>
  );
}
