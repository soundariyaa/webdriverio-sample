import Page from './page';

class Volvocars extends Page {
  get icon_Out_Calls() {
    return $('.ab.ah.ic.id.ie.if.ig.ih.v.x.y.z');
  }
  get learn_More_Display(){
    return $('.ab.ah.bc.ix.iy.v.x.y.z');
  }

  get learn_More_link(){
    //return $('.b.ab.ah.bc.ix.iy.v.x.y.z');
    return $('.ak.al.b.bw.bx.gy.gz.hg.iz.ja.jb.jc.jd.je.jf.jg');
  }

  get paragraph(){
    return $('.ab.ah.eu.jj.jk.o.v.x.y.z');
  }

  get video_Testimonials(){
    return $('.ab.ah.ct.hq.kh.ki.kj.v.x.y.z');
  }

  
  get video_Testimonials_0(){
    return $('.b.c.fy.ga.gb.h.ks.kt.ku.kv.kw.kx.m.o'); 
  }

  get video_Testimonials_1(){
    return $('.b.c.fy.ga.gb.h.kt.ku.kv.kw.kx.li.m.o'); 
  }
 
  
  get video_Testimonials_2(){
    return $('.b.c.fy.ga.gb.h.kt.ku.kv.kw.kx.lj.m.o'); 
  }

  get video_Testimonials_3(){
    return $('.b.c.fy.ga.gb.h.kt.ku.kv.kw.kx.lk.m.o');
  }

  get image_with_text_Section(){
    return $('.b.dy.dz.ea.ec.ed.ei.ej.ek.el.em.eo.fq.fr.fs.ll.lm');
  }

  get image_with_text_link(){
    //return $('ax b do f gk mb mc o');b bf lz ma o
    return $('.b.c.fy.h.md.n.o.ri');
    //return $('img');
  }

  get image_with_text_description(){
    return $('.ab.ah.aj.eh.v.x.y.z');
  }

  open() {
    super.open(
      'https://www.volvocars.com/intl/v/car-safety/a-million-more'
    );
  }
}

export default new Volvocars();
