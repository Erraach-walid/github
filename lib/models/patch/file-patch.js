import {nullPatch} from './patch';
  getHunkAt(bufferRow) {
    return this.getPatch().getHunkAt(bufferRow);
  }

  getBuffer() {
    return this.getPatch().getBuffer();
  getHunkLayer() {
    return this.getPatch().getHunkLayer();
  }

  getUnchangedLayer() {
    return this.getPatch().getUnchangedLayer();
  }

  getAdditionLayer() {
    return this.getPatch().getAdditionLayer();
  }

  getDeletionLayer() {
    return this.getPatch().getDeletionLayer();
  }

  getNoNewlineLayer() {
    return this.getPatch().getNoNewlineLayer();
  }

  // TODO delete if unused
  // TODO delete if unused
  // TODO delete if unused
  adoptBufferFrom(prevFilePatch) {
    this.getPatch().adoptBufferFrom(prevFilePatch.getPatch());
  }

  getFirstChangeRange() {
    return this.getPatch().getFirstChangeRange();
  }

        patch: this.getOldSymlink() ? this.getPatch().clone({status: 'deleted'}) : this.getPatch(),
        patch: this.getNewSymlink() ? this.getPatch().clone({status: 'added'}) : this.getPatch(),